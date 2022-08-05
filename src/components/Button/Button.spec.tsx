import {fireEvent, render, screen} from '@testing-library/react';
import Button from './index';

test('should be able to call in onClick event', async () => {
    render(<Button>Mostrar</Button>);

    const button = screen.getByText(/mostrar/i);

    fireEvent.click(button);

    expect(screen.getByText(/show/i)).toBeInTheDocument();

});

