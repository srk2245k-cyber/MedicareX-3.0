# MedicareX - Local Prototype Server Launcher
# Runs a lightweight HTTP server using PowerShell's built-in .NET HttpListener

$Port = 8080
$Root = $PSScriptRoot
$Url = "http://localhost:$Port/"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " MedicareX - Smart Medication Management (Prototype V1) " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "Serving files from: $Root"
Write-Host "Opening app at: $Url" -ForegroundColor Yellow

$Listener = New-Object System.Net.HttpListener
$Listener.Prefixes.Add($Url)

try {
    $Listener.Start()
} catch {
    $Port = 8081
    $Url = "http://localhost:$Port/"
    $Listener = New-Object System.Net.HttpListener
    $Listener.Prefixes.Add($Url)
    $Listener.Start()
}

Start-Process $Url

Write-Host "Press Ctrl+C in this terminal window to stop the server." -ForegroundColor Gray

while ($Listener.IsListening) {
    $Context = $Listener.GetContext()
    $Request = $Context.Request
    $Response = $Context.Response

    $LocalPath = $Request.Url.LocalPath
    if ($LocalPath -eq "/" -or $LocalPath -eq "") {
        $LocalPath = "/index.html"
    }

    $FilePath = [System.IO.Path]::Combine($Root, $LocalPath.TrimStart('/').Replace('/', '\'))

    if ([System.IO.File]::Exists($FilePath)) {
        $Ext = [System.IO.Path]::GetExtension($FilePath).ToLower()
        $ContentType = "text/plain"
        switch ($Ext) {
            ".html" { $ContentType = "text/html; charset=utf-8" }
            ".css"  { $ContentType = "text/css; charset=utf-8" }
            ".js"   { $ContentType = "application/javascript; charset=utf-8" }
            ".json" { $ContentType = "application/json; charset=utf-8" }
            ".svg"  { $ContentType = "image/svg+xml" }
            ".png"  { $ContentType = "image/png" }
            ".ico"  { $ContentType = "image/x-icon" }
        }

        $Bytes = [System.IO.File]::ReadAllBytes($FilePath)
        $Response.ContentType = $ContentType
        $Response.ContentLength64 = $Bytes.Length
        $Response.StatusCode = 200
        $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
    } else {
        $Response.StatusCode = 404
        $NotFoundMsg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $Response.OutputStream.Write($NotFoundMsg, 0, $NotFoundMsg.Length)
    }

    $Response.OutputStream.Close()
}
