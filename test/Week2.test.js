// Week2.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Week2 from '../src/pages/week2/Week2'; 

describe('Week2 component', () => {
  test('renders correctly', () => {
    render(<Week2 />);
    
    // Check if important elements are rendered
    expect(screen.getByText(/Can you figure out the definition of setting/i)).toBeInTheDocument();
    expect(screen.getByText(/Any guesses?/i)).toBeInTheDocument();
    expect(screen.getByText(/Hint:/i)).toBeInTheDocument();
    expect(screen.getByText(/Setting is the time/i)).toBeInTheDocument();
    expect(screen.getByText(/The time of the story could be/i)).toBeInTheDocument();

    // Check if icons are rendered
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByAltText('Pencil Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Bag Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Book Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Scale')).toBeInTheDocument();
    expect(screen.getByAltText('Help Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Hat')).toBeInTheDocument();
    expect(screen.getByAltText('Speak Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Info Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Prev Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Page Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Next Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Clock')).toBeInTheDocument();
    expect(screen.getByAltText('Home Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Info Clock Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Info Home Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Help Icon')).toBeInTheDocument();
  });

});
