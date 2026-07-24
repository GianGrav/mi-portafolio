# Fuente de los CV

Los PDF que descarga el portafolio (`public/Giancarlo_Gravagna_CV_*.pdf`) se
generan desde estos dos HTML. Para regenerarlos después de editar el texto:

```bash
libreoffice --headless --convert-to pdf cv/cv_es.html --outdir public
libreoffice --headless --convert-to pdf cv/cv_en.html --outdir public
mv public/cv_es.pdf public/Giancarlo_Gravagna_CV_ES.pdf
mv public/cv_en.pdf public/Giancarlo_Gravagna_CV_EN.pdf
```

El formato es a propósito de una sola columna, sin tablas de maquetación, sin
imágenes y sin cajas de texto: así es como los filtros automáticos (ATS) leen el
archivo sin perder secciones. Los títulos de sección usan los nombres que esos
filtros buscan — PERFIL PROFESIONAL / EXPERIENCIA / EDUCACIÓN / HABILIDADES.
Conviene no reemplazarlos por títulos creativos.

Verificar que el PDF quedó legible por máquina:

```bash
pdftotext -layout public/Giancarlo_Gravagna_CV_ES.pdf -
```

Si eso devuelve el texto completo y en orden, un ATS lo lee igual.
