import * as React from 'react';
import {highlight, highlightAuto} from 'highlight.js';

interface HighlightProps {
    children?: any;

    language?: string;
    ignoreIllegals?: boolean;
    continuation?: boolean;
}

export class Highlight extends React.Component<HighlightProps> {
    render () {
        return (
            <pre>
              <code className="hljs" dangerouslySetInnerHTML={{__html: (() => {
                if (this.props.language) {
                  try{
                  return highlight(this.props.language,
                           this.props.children,
                           this.props.ignoreIllegals,
                           this.props.continuation
                         ).value;
                  }
                  catch (e){
                    return highlightAuto(this.props.children).value;
                  }
                }
                else{
                  return highlightAuto(this.props.children).value;
                }
              })()}} />
            </pre>
        );
    }
}

export default Highlight;
