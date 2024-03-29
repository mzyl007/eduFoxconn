// ==UserScript==
// @name         富学宝典
// @namespace    https://github.com/mzyl007/eduFoxconn
// @version      1.05_test3
// @description  你的工厂学习助手
// @author       Hodge
// @license      MIT
// @run-at       document-end
// @match        *://iedu.foxconn.com/*
// @exclude      *://iedu.foxconn.com/js/*
// @icon         data:image/png;base64,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
// @grant        unsafeWindow
// @grant        GM_download
// @grant        GM_xmlhttpRequest
// @connect      *
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

(function() {
    'use strict';
    localStorage.setItem("foxconn","fix")
    console.log(localStorage.getItem("foxconn"))
    localStorage.removeItem("foxconn")
    // localStorage.clear()

    function fileLinkToStreamDownload(filepath, fileName, type) {
        console.log(filepath)
        if("pdf" == type){
            GM_xmlhttpRequest({
                method: "GET",
                url: filepath,
                responseType: "blob",
                Headers:{'Content-Type': `application/${type}` },
                onload : function () {
                    if (this.status == 200) {
                        //接受二进制文件流
                        console.log(this)
                        var blob = this.response;
                        const blobUrl = window.URL.createObjectURL(blob);
                        // 这里的文件名根据实际情况从响应头或者url里获取
                        const dlfile = document.createElement('a');
                        dlfile.href = blobUrl;
                        dlfile.style.display = 'none'
                        dlfile.download = fileName;
                        document.body.appendChild(dlfile)
                        dlfile.click();
                        window.URL.revokeObjectURL(blobUrl);
                    }
                },
                onerror: function (e) {
                    console.error ('**** error ', e)
                },
                onabort: function (e) {
                    console.error ('**** abort ', e)
                },
                ontimeout: function (e) {
                    console.error ('**** timeout ', e)
                }
            })
        }else{
            GM_download({
                url:filepath,
                name:fileName,
                onload:function () {
                    console.log(this)
                },
                onerror: function (e) {
                    console.error ('**** error ', e)
                },
                onabort: function (e) {
                    console.error ('**** abort ', e)
                },
                ontimeout: function (e) {
                    console.error ('**** timeout ', e)
                }
            })
        }
    }

    $("body").append("<div id='FoxconnHook'><button id='start_stop'>start</button>&nbsp;&nbsp学 习 助 手&nbsp;&nbsp</div>")
    const FoxconnHook = document.querySelector("#FoxconnHook");
    FoxconnHook.style.top = "100px"
    FoxconnHook.style.left = "100px"
    FoxconnHook.style.overflow = "hidden"
    FoxconnHook.style.position = "fixed"
    FoxconnHook.style.zIndex = 9999
    FoxconnHook.style.padding = "5px"
    FoxconnHook.style.textAlign = "center"
    FoxconnHook.style.border="1px solid #000000"
    FoxconnHook.style.borderRadius = "10px"
    const button = document.createElement("button")
    button.textContent = "＾"
    FoxconnHook.appendChild(button)
    const dl = document.createElement("table")
    dl.className = "d_table"
    button.onclick = function(){
        if(button.textContent == "＾"){
            document.querySelector(".d_table").style.display = "none"
        }else{
            document.querySelector(".d_table").style.display = "block"
        }
        button.textContent = button.textContent == "＾" ? "v":"＾"
    }
    if(unsafeWindow.location.href.indexOf("iedu.foxconn.com/public/user/playCourse") != -1 || unsafeWindow.location.href.indexOf("iedu.foxconn.com/public/play/play") != -1){
        setTimeout(function(){
            FoxconnHook.appendChild(dl)
            if(document.querySelector(".chapter") && document.querySelector(".chapter").children[0].children.length > 0){
                for(var i=0;document.querySelector(".chapter").children[0].children.length > i;i++){
                    const dd = document.createElement("tr")
                    dd.id = "Hooktab"+i
                    const div1 = document.createElement("td")
                    div1.textContent = document.querySelector(".chapter").children[0].children[i].title
                    div1.id = dd.id + "_1"
                    const div2 = document.createElement("td")
                    div2.textContent = document.querySelector(".chapter").children[0].children[i].children[1].firstChild.textContent
                    div2.id = dd.id + "_2"
                    const dlresoure = document.createElement("button")
                    dlresoure.textContent = "下载"
                    dlresoure.width = "10px"
                    dlresoure.id = dd.id + "_3"
                    dlresoure.onclick = function (){
                        var filepath = ""
                        var filetype = ""
                        var iter = 1
                        let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/;
                        function dlfile(){
                            document.querySelector(".chapter").children[0].children[parseInt(dlresoure.id.slice(7))].onclick()
                            if (document.querySelector("#realvideo") && document.querySelector("#realvideo").style.display != "none"){
                                document.querySelector("#danmu_send_opt").children[0].options[1].selected = true
                                document.querySelector("#danmu_send_opt").children[0].onchange()
                                filepath = document.querySelector("#realvideo_html5_api").src.toString()
                                filetype = "mp4"
                            }else if (document.querySelector("#pdf") && document.querySelector("#pdf").style.display != "none"){
                                document.getElementsByClassName("pdfwarp dpn")[0].children[2].click();
                                filepath = document.querySelector("#pdf").src.toString().split("?file=")[1]
                                filetype = "pdf"
                            }
                            iter++
                            setTimeout(()=>{
                                if (!reg.test(filepath)) {
                                    if(iter > 6){
                                        if(filetype = "pdf"){
                                            window.open(document.querySelector("#pdf").src.toString())
                                        }else{
                                            window.open(document.querySelector("#realvideo_html5_api").src.toString())
                                        }
                                    }else{
                                        dlfile()
                                    }
                                } else {
                                    fileLinkToStreamDownload(filepath,document.querySelector(".chapter").children[0].children[parseInt(dlresoure.id.slice(7))].title+"."+filetype , filetype)
                                }
                            },1000);
                        }
                        dlfile()
                    }
                    dd.style.backgroundColor = "#f1b701"
                    dd.appendChild(div1)
                    dd.appendChild(div2)
                    dd.appendChild(dlresoure)
                    dl.appendChild(dd)
                }
            }
            document.querySelector("#start_stop").onclick = function(){
                this.innerText = this.innerText == "stop"?"start":"stop"
                if(this.innerText == "stop"){
                    if (document.querySelector("#realvideo") && document.querySelector("#realvideo").style.display != "none"){
                        console.log("视频播放")
                    }else if (document.querySelector("#pdf") && document.querySelector("#pdf").style.display != "none"){
                        console.log("课件播放")
                    }
                }
            }
        },2000);
    }else{
        setTimeout(function(){
            const chlid = document.createElement("button")
            chlid.textContent = "学习该页面所有课程"
            const dd = document.createElement("tr")
            dd.append(chlid)
            dl.append(dd)
            FoxconnHook.append(dl)
        },2000);
    }
})();
