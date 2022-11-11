var mongoose=require("mongoose");
require("./mekansema"); 
var dbURI = "mongodb+srv://emre:1234@mekanbul.jxjavms.mongodb.net/?retryWrites=true&w=majority"; 
mongoose.connect(dbURI); 
function close(msg, callback) {
    mongoose.connection.close(() => {
        console.log(msg);
        callback();
    });
}
process.on("SIGINT", () => {
    close("Uygulama kapatilidi", () => {
        process.exit(0);
    });
});
mongoose.connection.on("connected", () => {
    console.log(dbURI + "adresindeki veri tabanina baglandi");
});

mongoose.connection.on("error", () => {
    console.log("Baglanti hatasi");
});

mongoose.connection.on("disconnected", () => {
    console.log("BAglanti kesilidi");
});
