import '../sass/index.scss';
import 'babel-polyfill';
import Info from "./module/sceneInfo";
import Scrollbehavior from "./module/scrollbehavior";
import page1 from "./page/page1";
import page2 from "./page/page2";
import page3 from "./page/page3";
import page4 from "./page/page4";

const scrollbehavior = new Scrollbehavior({
    info:Info,
    idx:"scene1-2",
    sceneCallback:(currentId)=>{
        console.log(currentId)
        switch (true) {
            case currentId==="scene1-1":
                page1.palyAnimation();
                break;
            case currentId==="scene2-2":
                page2.palyAnimation();
                break;
            case currentId==="scene3-1":
                page3.palyAnimation();
                break;
            case currentId==="scene4-3":
                page4.palyAnimation();
                break;
        }
    }
});