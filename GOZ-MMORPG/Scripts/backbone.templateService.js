(function(){
    var root = this;
    var previousTemplateService = root.TemplateService;
    if (previousTemplateService) return previousTemplateService;
    root.templateService = {};

        root.templateService.applyTemplates = function (templateText) {
            var templates = $($.parseHTML(templateText, null, true)).filter('script');
            _.each(templates, function (template) {
                var script = document.createElement('script');
                script.type = 'text/template';
                script.text = template.text;
                script.id = template.id;
                if ($('#' + template.id).length == 0 && template.id != undefined)
                    document.body.appendChild(script);
            })
        };
    
        return root.templateService;
}());