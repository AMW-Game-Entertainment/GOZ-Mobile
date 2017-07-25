
class GameEngineTemplates {
    // CONSTRUCTOR
    constructor(pathTo) {
        this.HTML = "";
        this.takeResult;
        this.pathTo = pathTo;
        this.keyTemplate;

        console.log("Init Game Engine Templates")
    }
    getTemplate(keyTemplate) {
        this.keyTemplate = keyTemplate;
        return this.findTemplate(response => {
            this.isFound = this.ajaxResult();
            return this.isFound.Status ? this.isFound.HTML : "Couldn't load login component";
        });
    }
    findTemplate(afterReady) {
        console.log("Getting Login Template")
        // CALL TO GET 
        const call$ = Rx.DOM.ajax({ // OPTIONS
            url: this.pathTo // PATH TO

        }).map(response => response);

        // AFTER GOT THE RESPONSE
        call$.subscribe(
            // ON SUCCESS
            takeHtml => {
                this.saveResult(takeHtml)
                this.saveTemplate(true);
                afterReady();
            },
            // ON ERROR
            error => {
                this.saveResult(takeHtml);
                afterReady();
            });
    }
    saveResult(currentResult) {
        this.HTML = currentResult.response;
        this.takeResult = currentResult.status == 200 ? {
            Status: true,
            HTML: currentResult.response
        } : {
                Status: false,
                Error: currentResult.response
            }
    }
    ajaxResult() {
        return this.takeResult;
    }
    getExistingTemplate(templateKey) {
        return TEMPLATES[templateKey];
    }
    saveTemplate(overwrite) {
        if (TEMPLATES[this.keyTemplate] != undefined && overwrite) {
            TEMPLATES[this.keyTemplate] = this.HTML;
        } else if (TEMPLATES[this.keyTemplate] == undefined) {
            TEMPLATES[this.keyTemplate] = this.HTML;
        }
    }
}

let takeTampltes = new GameEngineTemplates("./Includes/HTML-Components/LoginView.html");

// CALL GAME ENGINE UTILITIES
var TEMPLATES = {
    LOGIN: takeTampltes.getTemplate("LOGIN")
};
