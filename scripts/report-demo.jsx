import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Card, Badge, Rubric, ShareButton, PullQuote, EditorialBlogCard } from '../realfast-design/index.js';
function Examples() {
  const [message, setMessage] = useState('Try the buttons or focus the card and press Enter or Space.');
  return <>
    <div className="demo-actions">
      <Button onClick={() => setMessage('Primary action activated.')} style={{marginTop:12}}>Primary action</Button>
      <Button variant="blue" onClick={() => setMessage('Blue action activated.')}>Blue action</Button>
      <Button as="a" href="#verification" disabled onClick={() => setMessage('ERROR: disabled link activated')}>Disabled link</Button>
      <ShareButton onClick={() => setMessage('Share handler reached. This demonstration does not send anything.')} />
    </div>
    <p role="status" className="status">{message}</p>
    <Card interactive onClick={() => setMessage('Card activated.')} style={{marginTop:24}}>
      <Rubric section="Keyboard example" plain />
      <p style={{marginBottom:0}}>This card keeps its padding and surface when a margin is added.</p>
    </Card>
    <p><Badge style={{marginTop:12}} tone="success">Styles preserved</Badge></p>
    <EditorialBlogCard title="The reading layout adapts to the available space" section="Responsive example" sub="Resize this window" date="9 September 2026" readTime="2 min read" dek="The article card becomes one column on narrow screens. Typography and corners use the shared system." image="realfast-design/assets/illustrations/stacked-slabs.png" href="#changes" featured />
    <PullQuote style={{marginTop:24}}>The changes make existing decisions easier to apply consistently.</PullQuote>
  </>;
}
createRoot(document.getElementById('component-examples')).render(<Examples />);
