<!DOCTYPE html>
<html lang="es">
    <head>
        <meta name="description" content="Ignorar, prantilla.">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resultados de Encuesta Chafa de videojuegos</title>
        <link href="/Omega Cat Studio Logo.png" rel="icon">
        <link href="/Repository/Default.css" rel="stylesheet">
        <link href="../Encuesta.css" rel="stylesheet">
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-K94346QH');</script>
    <!-- End Google Tag Manager -->
    </head>
    

    <body>
        <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K94346QH"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
        <nav>
            <table id="nav-inter">
                <tr>
                <td><a class="boton-nav-inter" href="/Demostracion/">Demost- racion</a></td>
                <td><a class="boton-nav-inter" href="/Misc/"><p>Misc</p></a></td>
                <td id="logo-nav-inter"><a href="/"><img alt="Omega cat logo" class="boton-nav-inter" src="/Omega Cat Studio Logo.png" height="100px" width="100px"></a></td>
                <td><a class="boton-nav-inter" href="/Nosotros/SobreMi/">Sobre Mi</a></td>
                <td><a class="boton-nav-inter">Ejemplo</a></td>
                </tr>
            </table>
            <p id="fix-nav">Easter Egg</p>
        </nav>
        <main>
            <h1>Resultados recibidos ahora lo que opino que:</h1>
            <?php
            $consola = $_POST['Consola'];
            $genero = $_POST['genero'];
            $diego = $_POST['diego'];
            if($consola == "Nintendo"){
                echo "<p>Nintendo siempre va por su rollo</p>";
            } else {
                $consola = htmlspecialchars($consola);
                echo "<p>Nintendo es mejor que $consola</p>";
            }
            echo "<p>No tengo ninguna opinión sobre el genero $genero</p>";
            if($diego == "si"){
                echo "<p>Todos saben que diego es gey</p>";
            } else {
                echo "<p>Una de 2 No conoces a diego o eres diego preciona al XD en la pagina anterior</p>";
            }
            ?>
        </main>
        <footer>
            <a href="https://www.iubenda.com/privacy-policy/22536435" class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Política de Privacidad ">Política de Privacidad</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
            <a href="https://www.iubenda.com/privacy-policy/22536435/cookie-policy" class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Política de Cookies ">Política de Cookies</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
            <a href="https://www.iubenda.com/condiciones-de-uso/22536435" class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Términos y Condiciones ">Términos y Condiciones</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
        </footer>
    </body>
</html>