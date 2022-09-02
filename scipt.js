/*
 * This file is part of cssCV
 * cssCV is released under the MIT licence
 *
 * Author: Marco pascucci, 2019
 * mpascucci.github.io
*/

var element;

function fillSection(sectionName) {
    if (!(sectionName in data)) {
        // check if the section exists in data
        return;
    }
    var section = document.getElementsByClassName(sectionName)[0];
    for (var i=0; i<data[sectionName].length; i++) {
        var item = data[sectionName][i];
        if (item.display){
            var row = document.createElement("div");
            row.setAttribute("class","tableRow");
            var lCell = document.createElement("div");
            var rCell = document.createElement("div");
            var entry = document.createElement("div");
            entry.setAttribute("class","listEntry");
            lCell.setAttribute("class","tableCell  tableCell-left");
            rCell.setAttribute("class","tableCell");
            
            // populate the section
            for (var key in item) {
                if (["where", "date", "journal"].indexOf(key) > -1) {
                    element = document.createElement("p");
                    element.setAttribute("class", key + "Item");
                    element.innerHTML = item[key];
                    lCell.appendChild(element);
                    continue;
                }
                if (item[key] && ["display","url"].indexOf(key) < 0) {
                    element = document.createElement("p");
                    element.setAttribute("class", key + "Item");
                    // add "" around paper title
                    if (key == "paperTitle") {
                        item[key] = `"${item[key]}"`;
                    }
                    if (item["url"]) {
                        let url = item["url"];
                        element.innerHTML = `<a class="publication" href="${url}" target="blank">${item[key]}<\a>`;
                    } else {
                        element.innerHTML = item[key];
                    }
                    entry.appendChild(element);
                }
            }
            row.appendChild(lCell);
            rCell.appendChild(entry);
            row.appendChild(rCell);
            section.appendChild(row);
        }
    }
}

// fill-in spectial sections
var specialSections = ["educationList", "experienceList", "pastExperienceList", "Publications", "Miscellaneous"];
for (var i=0; i<specialSections.length;i++) {
    sectionName = specialSections[i];
    if (document.getElementsByClassName(sectionName).length == 1) {
        fillSection(sectionName);
    }
}


// fill in the content of spacial tags id
var nodes = document.getElementsByTagName("*");
for (i=0; i<nodes.length; i++) {
    node = nodes[i];
    if (node.id) {
        src = node.id.split("-");
        try {
            content = data[src[0]][src[1]];
            if (content) {
              node.removeAttribute("hidden");
            }
            if (node.localName == "img") {
              node.src = content;
              // node.setAttribute("style",`background:url(${content}) center no-repeat;`);
              continue;
            }
            if (node.localName == "a") {
                // the name contains an '@'
                if (content.indexOf('@') > -1) {
                    // it is a mail address
                    node.href = "mailto:"+content;
                } else {
                    // it is a normal link
                    node.href = content;
                };
                if (node.innerHTML == "") {
                    node.innerHTML = content;
                }
                continue;
            }
            if (content) {
              node.innerHTML = content;
            }
        }
        catch(error) {
            if (node.id.indexOf('-') > -1) {
                console.log(`<${node.localName}> has an invalid id: "${node.id}"`);
            }
            continue;
        }

    }
}
