import * as Clipboard from 'expo-clipboard';
import { setNavigationBarColor } from 'expo-system-ui';
import * as React from 'react';
import { Button, Text, TextInput } from 'react-native';

import { Page, Section } from '../components/Page';

export default function SystemUIScreen() {
  return (
    <Page>
      <Section title="Set Navigation Bar Color">
        <SetNavigationBarColorExample />
      </Section>
      <Section title="Get String">
        <GetStringExample />
      </Section>
      <Section title="Clipboard listener">
        <ListenerExample />
      </Section>
    </Page>
  );
}

SystemUIScreen.navigationOptions = {
  title: 'System UI',
};

function GetStringExample() {
  const [value, setValue] = React.useState('');

  return (
    <>
      <Text>On the clipboard: {value || 'nothing'}</Text>

      <Button
        onPress={async () => {
          const value = await Clipboard.getStringAsync();
          console.log('got clipboard:', value);
          setValue(value);
        }}
        title="Get Clipboard"
      />
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
          setNavigationBarColor(getRandomColor());
        }}
        title="Set Navigation Bar to random color"
      />
    </>
  );
}

function ListenerExample() {
  const clipboardListener = React.useRef<Clipboard.Subscription | null>(null);
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    clipboardListener.current = Clipboard.addClipboardListener(
      ({ content }: { content: string }) => {
        setValue(content);
      }
    );

    return () => {
      if (clipboardListener.current) {
        Clipboard.removeClipboardListener(clipboardListener.current);
      }
    };
  }, []);

  return (
    <>
      <Text style={{ padding: 8, height: 48, margin: 8, borderBottomWidth: 1 }}>
        Clipboard value changed to: {value}
      </Text>
    </>
  );
}
