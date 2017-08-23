Start-Process -FilePath ".\virtualenv\Scripts\pelican.exe" -ArgumentList "--debug --autoreload -r content -o output -s pelicanconf.py"
Start-Process -FilePath ".\virtualenv\Scripts\python.exe" -ArgumentList "-m pelican.server"
