<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cafeneaua Noastră</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f9f5f0;
            color: #5d4037;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background: linear-gradient(rgba(93, 64, 55, 0.8), rgba(93, 64, 55, 0.8));
            background-color: #6d4c41;
            color: white;
            padding: 4rem 0;
            text-align: center;
        }
        
        header h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        header p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        nav {
            background-color: #6d4c41;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        nav ul {
            display: flex;
            justify-content: center;
            list-style: none;
        }
        
        nav li {
            padding: 1rem 1.5rem;
        }
        
        nav a {
            text-decoration: none;
            color: white;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        nav a:hover {
            color: #d7ccc8;
        }
        
        section {
            padding: 4rem 0;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 3rem;
            color: #5d4037;
            font-size: 2.2rem;
        }
        
        .about-content {
            display: flex;
            align-items: center;
            gap: 3rem;
        }
        
        .about-text {
            flex: 1;
        }
        
        .about-image {
            flex: 1;
            height: 400px;
            background-color: #8d6e63;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
        }
        
        .menu-items {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .menu-card {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .menu-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        
        .menu-img {
            height: 200px;
            background-color: #a1887f;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
        }
        
        .menu-content {
            padding: 1.5rem;
        }
        
        .menu-content h3 {
            margin-bottom: 0.5rem;
            color: #5d4037;
        }
        
        .price {
            color: #8d6e63;
            font-weight: bold;
            font-size: 1.2rem;
            margin-top: 0.5rem;
        }
        
        .hours {
            background-color: #efebe9;
            padding: 2rem;
            border-radius: 8px;
            max-width: 500px;
            margin: 0 auto;
        }
        
        .hours ul {
            list-style: none;
        }
        
        .hours li {
            padding: 0.5rem 0;
            border-bottom: 1px solid #d7ccc8;
            display: flex;
            justify-content: space-between;
        }
        
        .hours li:last-child {
            border-bottom: none;
        }
        
        .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .contact-card {
            background-color: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        
        .contact-card h3 {
            margin-bottom: 1rem;
            color: #5d4037;
        }
        
        .btn {
            display: inline-block;
            background-color: #6d4c41;
            color: white;
            padding: 0.8rem 1.5rem;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 500;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .btn:hover {
            background-color: #5d4037;
        }
        
        footer {
            background-color: #5d4037;
            color: white;
            text-align: center;
            padding: 2rem 0;
            margin-top: 2rem;
        }
        
        @media (max-width: 768px) {
            nav ul {
                flex-direction: column;
                text-align: center;
            }
            
            header h1 {
                font-size: 2.2rem;
            }
            
            .about-content {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Cafeneaua Aroma</h1>
            <p>Locul perfect pentru o cafea de calitate și momente plăcute</p>
            <a href="#meniu" class="btn">Vezi meniul</a>
        </div>
    </header>
    
    <nav>
        <div class="container">
            <ul>
                <li><a href="#acasa">Acasă</a></li>
                <li><a href="#despre">Despre noi</a></li>
                <li><a href="#meniu">Meniu</a></li>
                <li><a href="#program">Program</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    
    <main class="container">
        <section id="acasa">
            <h2 class="section-title">Bun venit la Cafeneaua Aroma!</h2>
            <p style="text-align: center; font-size: 1.2rem; margin-bottom: 2rem;">
                Savurează cele mai bune sortimente de cafea într-un ambient relaxant și primitor. 
                Fie că vii dimineața pentru o cafea proaspătă sau după-amiaza pentru o pauză dulce, 
                te așteptăm cu zâmbetul pe buze.
            </p>
        </section>
        
        <section id="despre">
            <h2 class="section-title">Despre Cafeneaua Noastră</h2>
            <div class="about-content">
                <div class="about-text">
                    <p style="margin-bottom: 1rem;">
                        Cafeneaua Aroma a fost înființată în 2015 cu pasiune pentru cafeaua de calitate și dorința de a crea un spațiu comunitativ primitor.
                    </p>
                    <p style="margin-bottom: 1rem;">
                        Lucrăm direct cu fermieri din America Latină și Africa pentru a aduce cele mai bune boabe de cafea, prăjite proaspăt în fiecare săptămână.
                    </p>
                    <p>
                        În afara cafelei noastre de specialitate, oferim o selecție de ceaiuri, prăjituri proaspete și sandvișuri delicioase.
                    </p>
                </div>
                <div class="about-image">
                    Imagine interior cafenea
                </div>
            </div>
        </section>
        
        <section id="meniu">
            <h2 class="section-title">Meniul Nostru</h2>
            <div class="menu-items">
                <div class="menu-card">
                    <div class="menu-img">Cafea Espresso</div>
                    <div class="menu-content">
                        <h3>Espresso</h3>
                        <p>Cafea intensă și aromată, preparată din boabe de specialitate.</p>
                        <div class="price">8 lei</div>
                    </div>
                </div>
                <div class="menu-card">
                    <div class="menu-img">Cappuccino</div>
                    <div class="menu-content">
                        <h3>Cappuccino</h3>
                        <p>Espresso cu lapte aburit și spumă cremoasă.</p>
                        <div class="price">12 lei</div>
                    </div>
                </div>
                <div class="menu-card">
                    <div class="menu-img">Latte Macchiato</div>
                    <div class="menu-content">
                        <h3>Latte Macchiato</h3>
                        <p>Stratuit perfect cu lapte, espuma și espresso.</p>
                        <div class="price">14 lei</div>
                    </div>
                </div>
                <div class="menu-card">
                    <div class="menu-img">Ceai Special</div>
                    <div class="menu-content">
                        <h3>Ceaiuri de specialitate</h3>
                        <p>Selecție de ceaiuri negre, verzi și de fructe.</p>
                        <div class="price">10 lei</div>
                    </div>
                </div>
                <div class="menu-card">
                    <div class="menu-img">Prăjituri</div>
                    <div class="menu-content">
                        <h3>Prăjituri proaspete</h3>
                        <p>Croissante, torturi și prăjituri zilnic proaspete.</p>
                        <div class="price">9-15 lei</div>
                    </div>
                </div>
                <div class="menu-card">
                    <div class="menu-img">Sandvișuri</div>
                    <div class="menu-content">
                        <h3>Sandvișuri</h3>
                        <p>Preparate cu pâine proaspătă și ingrediente de calitate.</p>
                        <div class="price">12-18 lei</div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="program">
            <h2 class="section-title">Programul Nostru</h2>
            <div class="hours">
                <ul>
                    <li><span>Luni - Vineri</span> <span>7:00 - 20:00</span></li>
                    <li><span>Sâmbătă</span> <span>8:00 - 22:00</span></li>
                    <li><span>Duminică</span> <span>9:00 - 18:00</span></li>
                </ul>
            </div>
        </section>
        
        <section id="contact">
            <h2 class="section-title">Contact</h2>
            <div class="contact-info">
                <div class="contact-card">
                    <h3>Adresă</h3>
                    <p>Strada Cafelei nr. 15</p>
                    <p>București, Sector 1</p>
                </div>
                <div class="contact-card">
                    <h3>Telefon</h3>
                    <p>+40 721 123 456</p>
                </div>
                <div class="contact-card">
                    <h3>Email</h3>
                    <p>contact@cafeneauaaroma.ro</p>
                </div>
            </div>
            <div style="text-align: center;">
                <a href="tel:+40721123456" class="btn">Sună-ne</a>
            </div>
        </section>
    </main>
    
    <footer>
        <div class="container">
            <p>&copy; 2023 Cafeneaua Aroma. Toate drepturile rezervate.</p>
            <p style="margin-top: 1rem;">Website creat cu pasiune pentru cafea</p>
        </div>
    </footer>
</body>
</html>