import execjs

# Leitura do código JavaScript da função de download
with open('downloader.js', 'r') as js_file:
    js_code = js_file.read()

# Crie um contexto do V8
ctx = execjs.compile(js_code)

# Chame a função downloadAudio com a URL como parâmetro
url = 'https://www.youtube.com/watch?v=QjDuJfygyTk'
ctx.call("downloadAudio", url)
