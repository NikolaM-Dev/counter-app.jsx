import { render, screen } from '@testing-library/react';

import { FirstApp } from '../src/FirstApp';

describe('Tests on <FirstApp />', () => {
  const subtitle = 21;
  const title = "Hello, I'm Nikola";

  it('should match he snapshot', () => {
    const { container } = render(
      <FirstApp subTitle={subtitle} title={title} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should to show the title "Hello, I\'m Goku"', () => {
    render(<FirstApp title={title} />);

    expect(screen.getByText(title)).toBeTruthy();
  });

  it('should to show the title in a h1', () => {
    render(<FirstApp title={title} />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(title);
  });

  it('should to show the subtitle sended by props', () => {
    render(<FirstApp subtitle={subtitle} title={title} />);

    expect(screen.getByText(subtitle)).toBeTruthy();
  });
});
