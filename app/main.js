function openCvReady() {
    cv["onRuntimeInitialized"]=()=>{
        console.log("opencv ready")
        // read an image from the image source adn conveert to opencv format
        let imgMain = cv.imread("img-main");
        cv.imshow("main-canvas", imgMain);
        imgMain.delete();

        // RgB button
        document.getElementById("button-rgb").onclick = function () {
            let imgMain = cv.imread("img-main");
            cv.imshow("main-canvas", imgMain);
            imgMain.delete();
         
        };
         // Gray button
        document.getElementById("button-gray").onclick = function () {
            let imgMain = cv.imread("img-main");
            let imgGray = imgMain.clone();
            // converting image to gray scale
            cv.cvtColor(imgMain, imgGray, cv.COLOR_RGBA2GRAY, 0);
            cv.imshow("main-canvas", imgGray);
            imgMain.delete();
            imgGray.delete();
         
        };
        // Blur button
        document.getElementById("button-blur").onclick = function () {
            let imgMain = cv.imread("img-main");
            let imgBlur = imgMain.clone();
            let ksize = new cv.Size(49, 49);
            cv.GaussianBlur(imgMain, imgBlur, ksize, 0);
            cv.imshow("main-canvas", imgBlur);
            imgMain.delete();
            imgBlur.delete();
         
        };
        // Edge button
        document.getElementById("button-edge").onclick = function () {
            let imgMain = cv.imread("img-main");
            let imgCanny = imgMain.clone();
            cv.Canny(imgMain, imgCanny, 50, 100);
            cv.imshow("main-canvas", imgCanny);
            imgMain.delete();
            imgCanny.delete();
         
        };



    };
}