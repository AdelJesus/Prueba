from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# Usuarios registrados (temporal, sin base de datos aún)
usuarios = {
    "admin": "1234",
    "usuario1": "5678"
}

@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        usuario = request.form["Usuario"]
        contrasena = request.form["Contraseña"]

        if usuario in usuarios and usuarios[usuario] == contrasena:
            return redirect("/inicio")
        else:
            return render_template("login.html")

    return render_template("login.html")

@app.route("/inicio")
def inicio():
    return render_template("inicio.html")

@app.route("/contactos")
def contactos():
    return render_template("contactos.html")


if __name__ == "__main__":
    app.run(debug=True)