function tag_count() {
 
    var h1_ = document.getElementsByTagName("h1").length;
    var h2_ = document.getElementsByTagName("h2").length;
    var h3_ = document.getElementsByTagName("h3").length;
    var h4_ = document.getElementsByTagName("h4").length;
    var h5_ = document.getElementsByTagName("h5").length;
    var h6_ = document.getElementsByTagName("h6").length;
    var p_ = document.getElementsByTagName("p").length;
    var a_ = document.getElementsByTagName("a").length;

    document.write("Este documento tiene ");
    document.write(h1_);
    document.write(" etiquetas h1, ");
    document.write(h2_);
    document.write(" etiquetas h2, ");
    document.write(h3_);
    document.write(" etiquetas h3, ");    
    document.write(h4_);
    document.write(" etiquetas h4, ");    
    document.write(h5_);
    document.write(" etiquetas h5, ");    
    document.write(h6_);
    document.write(" etiquetas h6, ");    
    document.write(p_);
    document.write(" etiquetas de párrafo y ");
    document.write(a_);
    document.write(" etiquetas de enlace.");
}