set me=%~dp0%
node "%me%\node_modules\reveal-md\bin\reveal-md.js"  %1 --preprocessor preproc.js
pause
