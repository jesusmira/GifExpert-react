import  { render, screen } from '@testing-library/react';
import  { GiffItem } from '../../src/components/GiffItem';


describe ('Pruebas de GifItem', () => { 

   const title = 'Saitama';
   const url = 'https://one-punch.com/saitama.jpg';

   test('Debe de hacer match con el snaphot', () => { 
      
      const { container } = render( <GiffItem title={ title } url = { url}  />)
      expect( container ).toMatchSnapshot();
   });

   test('Debe de mostrar la imagen con el URL y el Alt indicado', () => { 
      render( <GiffItem title={ title } url = { url}  />);
      // screen.debug();
      // expect ( screen.getByRole("img").src).toBe( url );
      // expect ( screen.getByRole("img").alt).toBe( title );
      const {src, alt} = screen.getByRole("img");
      expect (src).toBe(url);
      expect (alt).toBe(alt);

   });

   test('Debe de mostrar el titulo en el componente', () => { 
      render( <GiffItem title={ title } url = { url}  />);
      expect(screen.getByText( title )).toBeTruthy();
   });
   
});