# -*- coding: utf-8 -*-
"""
Created on Fri Aug 15 00:58:51 2025

@author: Saul Farid
"""

// Datos iniciales del portafolio (puedes modificar aquí o usar un JSON externo)
const data = {
    nombre: "Saul Farid González Gomez",
    email: "tuemail@ejemplo.com",
    linkedin: "#",
    github: "#",
    proyectos: [
        { titulo: "Proyecto 1", descripcion: "Descripción breve del proyecto 1.", enlace: "#", imagen: "" },
        { titulo: "Proyecto 2", descripcion: "Descripción breve del proyecto 2.", enlace: "#", imagen: "" }
    ],
    certificados: [
        { nombre: "Certificado 1", enlace: "#" },
        { nombre: "Certificado 2", enlace: "#" }
    ]
};

// Función para cargar datos en la página
function cargarPortafolio() {
    document.getElementById("nombre").textContent = data.nombre;
    document.getElementById("footer-nombre").textContent = data.nombre;
    document.getElementById("email").textContent = data.email;
    document.getElementById("linkedin").href = data.linkedin;
    document.getElementById("github").href = data.github;

    // Cargar proyectos
    const contProy = document.getElementById("lista-proyectos");
    contProy.innerHTML = "";
    data.proyectos.forEach(p => {
        const div = document.createElement("div");
        div.className = "proyecto";
        div.innerHTML = `
            ${p.imagen ? `<img src="${p.imagen}" alt="${p.titulo}" />` : ""}
            <h3>${p.titulo}</h3>
            <p>${p.descripcion}</p>
            <a href="${p.enlace}">Ver proyecto</a>
        `;
        contProy.appendChild(div);
    });

    // Cargar certificados
    const contCert = document.getElementById("lista-certificados");
    contCert.innerHTML = "";
    data.certificados.forEach(c => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${c.enlace}">${c.nombre}</a>`;
        contCert.appendChild(li);
    });
}

// Ejecutar al cargar la página
window.addEventListener("DOMContentLoaded", cargarPortafolio);
