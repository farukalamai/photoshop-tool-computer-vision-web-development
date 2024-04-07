function openCvReady() {
    cv["onRuntimeInitialized"]=()=>{
        console.log("opencv ready")
        // read an image from the image source adn conveert to opencv format
        let imgMain = cv.imread("img-main");
        cv.imshow("main-canvas", imgMain);
        imgMain.delete();
    }
}