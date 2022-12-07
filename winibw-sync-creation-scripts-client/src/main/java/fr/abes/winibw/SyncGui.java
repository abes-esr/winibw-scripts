package fr.abes.winibw;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.Charset;
import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.swing.*;

public class SyncGui {

    public static void main(String[] args) {

        JFrame frame = new JFrame("Synchronisation des scripts WinIBW");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 400);
        frame.setLayout(new BoxLayout(frame.getContentPane(), BoxLayout.Y_AXIS));

        // create a panel to add buttons
        JPanel top = new JPanel();
        top.setLayout(new GridLayout(4, 2, 1, 1));

        JLabel listLabel = new JLabel("Branche distante :");
        top.add(listLabel);

        List<String> petStrings = new ArrayList<>();
        RestTemplate restTemplate = new RestTemplate();
        List<Map> response = restTemplate.getForObject(
                "https://api.github.com/repos/{owner}/{repo}/branches", List.class, "abes-esr",
                "winibw-scripts");

        int selectedBranche = 0;
        int count = 0;

        // Iterate through list of file metadata from response.
        for (Map fileMetaData : response) {

            // Get file name & raw file download URL from response.
            String brancheName = (String) fileMetaData.get("name");
            petStrings.add(brancheName);
            if (brancheName.equalsIgnoreCase("develop")) {
                selectedBranche = count;
            }
            count++;
        }

        JComboBox list = new JComboBox(petStrings.toArray());
        list.setSelectedIndex(selectedBranche);
        top.add(list);

        JLabel pathLabel = new JLabel("Repertoire local scripts de creation (.js) :");
        top.add(pathLabel);
        JTextField path = new JTextField("C:\\oclcpica\\WinIBW30\\scripts");
        top.add(path);

        JLabel pathLabel2 = new JLabel("Repertoire local scripts de transformation (.js + .xul) :");
        top.add(pathLabel2);
        JTextField path2 = new JTextField("C:\\oclcpica\\WinIBW30\\chrome\\ibw\\content\\xul");
        top.add(path2);

        JLabel pathLabel4 = new JLabel("Repertoire local du fichier de preference (.js) :");
        top.add(pathLabel4);
        JTextField path4 = new JTextField("C:\\oclcpica\\WinIBW30\\defaults\\pref");
        top.add(path4);

        JPanel center = new JPanel();
        center.setLayout(new GridLayout(2, 1, 1, 1));
        JButton syncBtn = new JButton("Synchroniser");
        center.add(syncBtn);

        JTextArea log = new JTextArea();
        JScrollPane scrollPane = new JScrollPane(
                log,
                JScrollPane.VERTICAL_SCROLLBAR_ALWAYS,
                JScrollPane.HORIZONTAL_SCROLLBAR_ALWAYS);

        center.add(scrollPane);

        JLabel label = new JLabel("");

        syncBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                try {

                    //Scripts de création

                    log.setText("");
                    label.setText("Synchronisation en cours de scripts de creation");

                    RestTemplate restTemplate = new RestTemplate();
                    List<Map> response = restTemplate.getForObject(
                            "https://api.github.com/repos/{owner}/{repo}/contents/scripts-creation-js?ref={branch}", List.class, "abes-esr",
                            "winibw-scripts", list.getSelectedItem().toString());

                    // To print response JSON, using GSON. Any other JSON parser can be used here.
                    // Gson gson = new GsonBuilder().setPrettyPrinting().create();
                    //log.append("<JSON RESPONSE START>\n" + gson.toJson(response) + "\n<JSON RESPONSE END>\n");

                    // Iterate through list of file metadata from response.
                    for (Map fileMetaData : response) {

                        // Get file name & raw file download URL from response.
                        String fileName = (String) fileMetaData.get("name");
                        String downloadUrl = (String) fileMetaData.get("download_url");
                        System.out.println(fileMetaData.toString());
                        log.append("File Name = " + fileName + " | Download URL = " + downloadUrl + System.lineSeparator());

                        // We will only fetch read me file for this example.
                        if (downloadUrl != null) {

                            /*
                             * Get file content as string
                             *
                             * Using Apache commons IO to read content from the remote URL. Any other HTTP
                             * client library can be used here.
                             */
                            String fileContent = null;

                            fileContent = IOUtils.toString(new URI(downloadUrl), Charset.defaultCharset());

                            // log.append("\nfileContent = <FILE CONTENT START>\n" + fileContent + "\n<FILE CONTENT END>\n");

                            File file = new File(path.getText() + File.separator + fileName);
                            FileUtils.copyURLToFile(new URL(downloadUrl), file);

                        }

                        label.setText("Synchronisation OK");
                    }

                    //Scripts de transformation

                    log.setText("");
                    label.setText("Synchronisation en cours de scripts de transformation");

                    RestTemplate restTemplate2 = new RestTemplate();
                    List<Map> response2 = restTemplate2.getForObject(
                            "https://api.github.com/repos/{owner}/{repo}/contents/scripts-transformation-js-et-xul?ref={branch}", List.class, "abes-esr",
                            "winibw-scripts", list.getSelectedItem().toString());

                    // To print response JSON, using GSON. Any other JSON parser can be used here.
                    // Gson gson = new GsonBuilder().setPrettyPrinting().create();
                    //log.append("<JSON RESPONSE START>\n" + gson.toJson(response) + "\n<JSON RESPONSE END>\n");

                    // Iterate through list of file metadata from response.
                    for (Map fileMetaData2 : response2) {

                        // Get file name & raw file download URL from response.
                        String fileName2 = (String) fileMetaData2.get("name");
                        String downloadUrl2 = (String) fileMetaData2.get("download_url");
                        System.out.println(fileMetaData2.toString());
                        log.append("File Name = " + fileName2 + " | Download URL = " + downloadUrl2 + System.lineSeparator());

                        // We will only fetch read me file for this example.
                        if (downloadUrl2 != null) {

                            /*
                             * Get file content as string
                             *
                             * Using Apache commons IO to read content from the remote URL. Any other HTTP
                             * client library can be used here.
                             */
                            String fileContent2 = null;

                            fileContent2 = IOUtils.toString(new URI(downloadUrl2), Charset.defaultCharset());

                            // log.append("\nfileContent = <FILE CONTENT START>\n" + fileContent + "\n<FILE CONTENT END>\n");

                            File file2 = new File(path2.getText() + File.separator + fileName2);
                            FileUtils.copyURLToFile(new URL(downloadUrl2), file2);

                        }

                        label.setText("Synchronisation OK");
                    }

                    //Fichier de préférence js

                    log.setText("");
                    label.setText("Synchronisation en cours du fichier de preference js");

                    RestTemplate restTemplate4 = new RestTemplate();
                    List<Map> response4 = restTemplate4.getForObject(
                            "https://api.github.com/repos/{owner}/{repo}/contents/scripts-fichier-de-pref?ref={branch}", List.class, "abes-esr",
                            "winibw-scripts", list.getSelectedItem().toString());

                    for (Map fileMetaData4 : response4) {

                        // Get file name & raw file download URL from response.
                        String fileName4 = (String) fileMetaData4.get("name");
                        String downloadUrl4 = (String) fileMetaData4.get("download_url");
                        System.out.println(fileMetaData4.toString());
                        log.append("File Name = " + fileName4 + " | Download URL = " + downloadUrl4 + System.lineSeparator());

                        // We will only fetch read me file for this example.
                        if (downloadUrl4 != null) {

                            /*
                             * Get file content as string
                             *
                             * Using Apache commons IO to read content from the remote URL. Any other HTTP
                             * client library can be used here.
                             */
                            String fileContent4 = null;

                            fileContent4 = IOUtils.toString(new URI(downloadUrl4), Charset.defaultCharset());

                            // log.append("\nfileContent = <FILE CONTENT START>\n" + fileContent + "\n<FILE CONTENT END>\n");

                            File file4 = new File(path4.getText() + File.separator + fileName4);
                            FileUtils.copyURLToFile(new URL(downloadUrl4), file4);

                        }

                        label.setText("Synchronisation OK");
                    }

                } catch (IOException ex) {
                    log.append(ex.getLocalizedMessage() + System.lineSeparator());
                    label.setText("Erreur d'entrée/sortie");
                } catch (URISyntaxException ex) {
                    log.append(ex.getLocalizedMessage() + System.lineSeparator());
                    label.setText("Erreur d'URL");
                }
            }
        });

        frame.getContentPane().add(top);
        frame.getContentPane().add(syncBtn);
        frame.getContentPane().add(scrollPane);
        frame.getContentPane().add(BorderLayout.SOUTH, label);
        frame.setVisible(true);

    }
}
