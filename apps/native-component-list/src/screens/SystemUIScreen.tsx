import { Appearance, SystemUI } from 'expo-system-ui';
import * as React from 'react';
import { Button, Text } from 'react-native';

import { Page, Section } from '../components/Page';

export default function SystemUIScreen() {
  return (
    <Page>
      <Section title="System UI Visibility">
        <SetNavigationBarVisibilityExample />
      </Section>
      <Section title="Status Bar Color">
        <SetStatusBarColorExample />
      </Section>
      <Section title="Navigation Bar Color">
        <SetNavigationBarColorExample />
      </Section>
      <Section title="Navigation Bar Divider Color">
        <SetNavigationBarDividerColorExample />
      </Section>
      <Section title="Appearance">
        <SetAppearanceExample />
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
      <Button onPress={onPress} title={value === 'hidden' ? 'Show System UI' : 'Hide System UI'} />
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

function SetNavigationBarDividerColorExample() {
  return (
    <>
      <Button
        onPress={() => {
          SystemUI.setNavigationBarDividerColor(getRandomColor());
        }}
        title="Set Navigation Bar Divider to random color"
      />
    </>
  );
}

function SetStatusBarColorExample() {
  return (
    <>
      <Button
        onPress={() => {
          SystemUI.setStatusBarColor(getRandomColor());
        }}
        title="Set Status Bar to random color"
      />
    </>
  );
}

const appearances: Appearance[] = ['light', 'dark', 'auto', 'unspecified'];

function SetAppearanceExample() {
  const [appearance, setAppearance] = React.useState<Appearance>(appearances[0]);

  const nextValue = React.useMemo(() => {
    const index = appearances.indexOf(appearance);
    const newValue = appearances[(index + 1) % appearances.length];
    return newValue;
  }, [appearance]);
  const onPress = React.useCallback(() => {
    SystemUI.setAppearance(nextValue);
    setAppearance(nextValue);
  }, [nextValue]);

  return (
    <>
      <Button onPress={onPress} title={`Set Appearance to ${nextValue}`} />
    </>
  );
}
