import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en GifExpertApp', () => { 
   
    test('Debe de hacer match con el snapshot', () => { 
       const { container } = render(<GifExpertApp/>);
   
        expect( container ).toMatchSnapshot();
    });

    test('debe de recoger el valor del input y mostrarlo ', () => { 
       
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'Demon Slayer' } } );
        expect( input.value).toBe('Demon Slayer');

        fireEvent.submit( form );
        expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);


    });
    test('debe de no hacer nada si el valor es repetido ', () => { 
       
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'One punch man' } } );
        fireEvent.submit( form );

        expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
        

    });



});