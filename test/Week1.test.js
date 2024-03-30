// Week1.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Week1 from '../src/pages/Week1/Week1'; 

describe('Week1 component', () => {
    jest.mock('./styles.module.css', () => ({ 
        parent: 'mockedParentClass',
        header: 'mockedHeaderClass',
      }));
  test('renders correctly', () => {
    render(<Week1 />);
    
    // Check if important elements are rendered
    expect(screen.getByText(/Week 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Elements of Story Writing/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome to term 2 of Writers Club/i)).toBeInTheDocument();
    expect(screen.getByText(/For today’s lesson/i)).toBeInTheDocument();
    expect(screen.getByText(/1/i)).toBeInTheDocument();

    // Check if icons are rendered
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByAltText('Pencil Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Bag Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Book Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Scale')).toBeInTheDocument();
    expect(screen.getByAltText('Book2')).toBeInTheDocument();
    expect(screen.getByAltText('Hat')).toBeInTheDocument();
    expect(screen.getByAltText('Speak Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Info Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Prev Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Page Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Next Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Boy')).toBeInTheDocument();
    expect(screen.getByAltText('Cloud1')).toBeInTheDocument();
    expect(screen.getByAltText('Cloud2')).toBeInTheDocument();
    expect(screen.getByAltText('Cloud3')).toBeInTheDocument();
    expect(screen.getByAltText('Cloud4')).toBeInTheDocument();
    expect(screen.getByAltText('Cloud5')).toBeInTheDocument();
  });

});
