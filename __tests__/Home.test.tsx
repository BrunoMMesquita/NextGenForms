import { render, screen } from '@testing-library/react';
import Home from '../src/app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);

    // Verifica se o logo do Next.js está renderizado
    const logoImage = screen.getByAltText('Next.js logo');
    expect(logoImage).toBeInTheDocument();

    // Verifica o texto da lista
    const firstListItem = screen.getByText(/Get started by editing/i);
    expect(firstListItem).toBeInTheDocument();

    const secondListItem = screen.getByText(/Save and see your changes instantly/i);
    expect(secondListItem).toBeInTheDocument();

    // Verifica os botões
    const deployButton = screen.getByRole('link', { name: /Deploy now/i });
    expect(deployButton).toBeInTheDocument();

    const docsLink = screen.getByRole('link', { name: /Read our docs/i });
    expect(docsLink).toBeInTheDocument();

    // Verifica o footer
    const learnLink = screen.getByRole('link', { name: /Learn/i });
    expect(learnLink).toBeInTheDocument();

    const examplesLink = screen.getByRole('link', { name: /Examples/i });
    expect(examplesLink).toBeInTheDocument();

    const nextjsLink = screen.getByRole('link', { name: /Go to nextjs.org →/i });
    expect(nextjsLink).toBeInTheDocument();
  });

  it('renders the correct href attributes for links', () => {
    render(<Home />);

    // Verifica os links
    expect(screen.getByRole('link', { name: /Deploy now/i })).toHaveAttribute(
      'href',
      'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    );

    expect(screen.getByRole('link', { name: /Read our docs/i })).toHaveAttribute(
      'href',
      'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    );

    expect(screen.getByRole('link', { name: /Learn/i })).toHaveAttribute(
      'href',
      'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    );

    expect(screen.getByRole('link', { name: /Examples/i })).toHaveAttribute(
      'href',
      'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    );

    expect(screen.getByRole('link', { name: /Go to nextjs.org →/i })).toHaveAttribute(
      'href',
      'https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    );
  });
});