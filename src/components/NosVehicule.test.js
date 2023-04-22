import { render, screen } from '@testing-library/react';
import NosVehicule from './NosVehicule';


test('Découvrire nos voitures', () => {
  render(<NosVehicule />);
  const linkElement = screen.getByText(/Découvrire nos voitures'/i);
  expect(linkElement).toBeInTheDocument();
});
