import React from 'react';
import {Button, Card, AuthorBio} from '../realfast-design/index';
const link = <Button as="a" href="/contact" target="_blank" onClick={event => event.currentTarget.href}>Contact</Button>;
const submit = <Button type="submit" form="lead" onClick={event => event.currentTarget.disabled}>Send</Button>;
const alias = <Button variant="signal" disabled />;
const card = <Card padding="var(--space-4)" interactive onClick={() => {}} />;
const bio = <AuthorBio name="Author" headingAs="h1" />;
// @ts-expect-error A native button does not accept href.
const invalidButton = <Button href="/contact" />;
// @ts-expect-error The discriminant is limited to native button or link.
const invalidTag = <Button as="section" />;
