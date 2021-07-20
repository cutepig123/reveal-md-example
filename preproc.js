var resolvePlantuml = (markdown) => 
{
	//console.log('>>type of markdown:' + typeof markdown)
		
	markdown = markdown.replace(/```sequence\s*([\s\S]*?)```/igm, function(match, text, offset){
		//console.log('>>in step1:' + text)
		return '```plantuml\n@startuml\n' + text + '@enduml\n```'
	})
	
	markdown = markdown.replace(/```mermaid\s*classDiagram\s*([\s\S]*?)```/igm, function(match, text, offset){
		console.log('>>in step1:' + text)
		return '```plantuml\n@startuml\n' + text + '@enduml\n```'
	})
	
	//console.log('>>type of markdown:' + typeof markdown)
	//console.log('step1:' + markdown)
	
    markdown = markdown.replace(/```plantuml\s*([\s\S]*?)```/igm, function(match, text, offset){
		//console.log('in step2:' + text)
        // match "```plantuml" then any whitespace or linebreak
        // then any characters (including line breaks) and mark it as capture group (parenthesis) -> ([\s\S]*?)
        // then "```"
        // -> the found capturegroup is available in the variable "text". It is the plantuml script.
    

		let encoder = require('plantuml-encoder');
		var server = '//www.plantuml.com/plantuml/svg/';
        // return an img tag as replacement for the plantuml-script
        return '<img src="'+server + encoder.encode(text)+'"/>';
    })
	//console.log('step2:' + markdown)
	return markdown
}


module.exports = (markdown, options) => {
    return new Promise((resolve, reject) => {
        return resolve(resolvePlantuml(markdown));
    });
};