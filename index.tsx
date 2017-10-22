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
                  return highlight(this.props.language,
                           this.props.children,
                           this.props.ignoreIllegals,
                           this.props.continuation
                         ).value;
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
