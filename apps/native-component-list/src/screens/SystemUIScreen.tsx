import { SystemUI } from 'expo-system-ui';
import * as React from 'react';
import { Button, Text } from 'react-native';

import { Page, Section } from '../components/Page';

export default function SystemUIScreen() {
  return (
    <Page>
      <Section title="Set Navigation Bar Color">
        <SetNavigationBarColorExample />
      </Section>
      <Section title="Set System UI Visibility">
        <SetNavigationBarVisibilityExample />
      </Section>
    </Page>
  );
}

SystemUIScreen.navigationOptions = {
  title: 'System UI',
};

function SetNavigationBarVisibilityExample() {
  const [value, setValue] = React.useState<'visible' | 'hidden'>('visible');

  const onPress = React.useCallback(() => {
    setValue((currentValue) => {
      const newValue = currentValue === 'visible' ? 'hidden' : 'visible';
      SystemUI.setNavigationBarVisibility(newValue);
      return newValue;
    });
  }, []);

  return (
    <>
      <Text>Visibility: {value}</Text>
      <Button onPress={onPress} title="Toggle Visibility" />
    </>
  );
}

function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function SetNavigationBarColorExample() {
  return (
    <>
      <Button
        onPress={() => {
          SystemUI.setNavigationBarColor(getRandomColor());
        }}
        title="Set Navigation Bar to random color"
      />
    </>
  );
}
