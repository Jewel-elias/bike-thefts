import { AppShell, Container } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { useDisclosure } from '@mantine/hooks';
import Footer from './footer';
import Header from './header';
import Sidebar from './sidebar';

function Layout({ children }: PropsWithChildren) {
  const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false);

  return (
    <AppShell
      styles={{ main: { minHeight: 'calc(100vh - 3.7rem)' } }}
      aside={{
        width: 400,
        breakpoint: 'sm',
        collapsed: { mobile: !drawerOpened, desktop: true },
      }}
      header={{ height: 60 }}
    >
      <AppShell.Header>
        <Header drawerOpened={drawerOpened} toggleDrawer={toggleDrawer} />
      </AppShell.Header>
      <AppShell.Aside>
        <Sidebar />
      </AppShell.Aside>
      <AppShell.Main pt="5rem" pb="3rem">
        <Container size="xl">{children}</Container>
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}

export default Layout;
