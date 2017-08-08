import {Parser} from 'htmlparser2';

export default (html) => {
    const output = [];
    const htmlParser = new Parser(
        {
            ontext(text) {
                output.push(text);
            },
        },
        {decodeEntities: true}
    );
    htmlParser.write(html);
    htmlParser.end();
    return output.join(' ');
};
