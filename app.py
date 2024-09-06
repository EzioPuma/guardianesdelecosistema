from flask import Flask, render_template

app = Flask(__name__)

# Ruta para la página de inicio
@app.route('/home')
def home():
    return render_template('home.html')

# Ruta para registrar una planta
@app.route('/registroplanta', methods=['GET', 'POST'])
def registroplanta():
    return render_template('registroplanta.html')
    
@app.route('/formulario', methods=['POST'])
def formulario():
    # Aquí va el código para manejar los datos del formulario
    # Puedes agregar lógica para procesar el formulario y redirigir o mostrar una respuesta
    return 'Formulario recibido'  # Cambia esto según lo que desees hacer


# Ruta para consultar la información de las plantas
@app.route('/consultar')
def consultar():
    return render_template('consulta.html')

# Ruta para el registro de usuarios
@app.route('/register', methods=['GET', 'POST'])
def register():
    return render_template('register.html')

# Ruta para la página de inicio de sesión
@app.route('/login')
def login():
    return render_template('login.html')

# Ruta para la página homesupervisor
@app.route('/homesupervisor')
def homesupervisor():
    return render_template('homesupervisor.html')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8080)
