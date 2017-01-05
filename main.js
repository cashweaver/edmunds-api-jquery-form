/*
 * Simple array generation
 *
 * Assumes
 *  1. start is an integer
 *  1. end is an integer
 */
const range = (start, end, step) => {
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    console.error('Invalid input. Expected integers.')
    return null;
  }

  let effectiveStep = step;
  if (typeof effectiveStep == 'undefined') {
    effectiveStep = (start <= end) ? 1 : -1
  } else if (effectiveStep === 0) {
    console.error('Invalid step Step cannot be 0');
    return null;
  }

  if (effectiveStep < 0 && start < end) {
    console.error('Invalid input. Start must be greater than End when using a negative step');
    return null;
  } else if (effectiveStep > 0 && start > end) {
    console.error('Invalid input. Start must be less than End when using a positive step');
    return null;
  }

  const r = [];
  if (effectiveStep > 0) {
    for (let i = start; i < end; i += effectiveStep) {
      r.push(i);
    }
  } else {
    for (let i = start; i > end; i += effectiveStep) {
      r.push(i);
    }
  }
  return r;
};

$(() => {
  // Store our form elements for easy access
  const $formElements = {
    year: $('#vehicle-form-year'),
    make: $('#vehicle-form-make'),
    model: $('#vehicle-form-model'),
    trim: $('#vehicle-form-trim'),
    transmission: $('#vehicle-form-transmission'),
    mileage: $('#vehicle-form-mileage'),
    zipcode: $('#vehicle-form-zipcode'),
  };

  // Populate the Year field
  const years = range(2017, 1989).map((year) => (
    `<option>${year}</option>`
  ));
  years.unshift('<option>None</option>')
  $formElements.year.html(years);
});

