<h1>GIT Repository einrichten: 

1. cmder.net full downloaden --> entpacken und cmder.exe ausführen

2. Github konfigurieren

   
   
   ```
   1  git config --global user.name "samuelreichor" //username von git ACC
   2  git config --global user.name //zur kontrolle
   3  git config --global user.email "samuelreichor@gmail.com" //emailvon git ACC
   4  git config --global user.email //zur kontrolle
   ```





<h2>Lokales Repo</h2>
3. zu den Ordner hin navigieren wo ein Git Repository sein sollte mit

   ```
   cd .. 					//Ordner verlassen
   cd musterOrdner\ 		// Ordner Aufmachen
   mkdir musterprojekt 	// Ordner erstellen
   ```

4. Repository Intialisieren

   ```
   git init
   ```

5. Dateien hinzufügen

   ```
   git status //überprüfung 
     git add dateiname 		//Bestimmte Datei zu Repo hinzufügen
     git add * 				// Alle Erneuerungen hinzufügen
   git commit -m "musternachricht"
   git status
   ```



<h2>Remote Repo</h2>
3. zu den Ordner hin navigieren wo ein Git Repository sein sollte mit

   ```
   cd .. 					//Ordner verlassen
   cd musterOrdner\ 		// Ordner Aufmachen
   mkdir musterprojekt 	// Ordner erstellen
   ```

4. Repository Intialisieren

   ```
   git clone https://github.com/samuelreichor/Web3.0.git 		// Link vom Remote Repo bei Github
   ```

5. Workflow

   ```
   git pull					/Erneuerungen herunterladen vom Repository
     git add dateiname 		//Bestimmte Datei zu Repo hinzufügen
     git add * 				//Alle Erneuerungen hinzufügen
   git commit -m "musternachricht"
   git push					///Erneuerungen raufladen aufs Repository
   ```

credential.helper (Fehlermeldung beim pull/push)

1. If your Git password is cached in *credential.helper*, then unset it:

   ```
   git config --local --unset credential.helper
   ```

   Or, If you have set your credentials globally, then:

   ```
   git config --global --unset credential.helper
   ```

2. Access Token generieren

3. git pull / git push 

4. beim Username username eingeben und statt dem passwort den Access Token



<h2>Remote Repository mit mehr als 2 Nutzer</h2>

1. Ein normales Remote Repository einrichten.

2. zu diesem Repo die Nutzer einladen unter Settings --> Collaborators--> Manage access

   <h4>Workflow</h4>

   ```
   1. git pull origin main				//alles updaten
   2. git checkout -b musterbranch		//muster-branch ist eine Abzweigung vom 									//Master-branch
   3. 		git add *					//alle Dateien adden
   		git add musterdateiname		//eine Datei/Folder adden
   4. git commit -m "Musternachricht"	//Commiten
   5. git push origin musterbranch		//auf der vorhin entworfenen 												//musterbranch zum Repository pushen
   ```

   