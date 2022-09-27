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

        JFrame frame = new JFrame("Synchronisation des scripts WinIBW de creation (scripts avec un fichier js sans fichier xul)");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(600, 400);
        frame.setLayout(new BoxLayout(frame.getContentPane(), BoxLayout.Y_AXIS));

        // create a panel to add buttons
        JPanel top = new JPanel();
        top.setLayout(new GridLayout(3, 2, 1, 1));

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

        JLabel pathLabel = new JLabel("Répertoire local :");
        top.add(pathLabel);
        JTextField path = new JTextField("C:\\oclcpica\\WinIBW30\\scripts");
        top.add(path);

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

                    log.setText("");
                    label.setText("Synchronisation en cours");

                    RestTemplate restTemplate = new RestTemplate();
                    List<Map> response = restTemplate.getForObject(
                            "https://api.github.com/repos/{owner}/{repo}/contents/creation-scripts-js?ref={branch}", List.class, "abes-esr",
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

                        label.setText("Synchronisation terminée");
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
