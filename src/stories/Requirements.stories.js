import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import { Requirements } from '../components/Requirements';
import { MainApp } from '../components/MainApp';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  return (<MainApp/>);
});
