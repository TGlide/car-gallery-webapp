export type Car = {
  name: string
  images: Array<string>
  year?: number
}

const cars: Array<Car> = [
  {
    name: 'Orange Fusca',
    images: [
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
      'https://images.unsplash.com/photo-1626021142316-bf66885351a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80',
    ],
    year: 1991,
  },
  {
    name: 'Ford Mustang',
    images: [
      'https://images.unsplash.com/photo-1544896478-d5b709d413c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    ],
    year: 1974,
  },
  {
    name: 'Mercedes Coupe',
    images: [
      'https://images.unsplash.com/photo-1523828446771-151afb8374f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
    ],
    year: 1980,
  },
  {
    name: 'Ford Model A',
    images: [
      'https://images.unsplash.com/photo-1563137391-0030ae24bc35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
    ],
    year: 1929,
  },
  {
    name: 'Ford Hot Rod',
    images: [
      'https://images.unsplash.com/photo-1526284059721-5519814a2274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1526284133948-37c18d06de62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    ],
    year: 1933,
  },
  {
    name: 'VW Bus',
    images: [
      'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    ],
    year: 1969,
  },
]

export default cars
