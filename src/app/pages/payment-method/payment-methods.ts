import { PaymentMethod } from './MethodsInterface';

export const methods: PaymentMethod[] = [
  {
    title: 'Cobertura familiar',
    price: '$106.200',
    img: '../../../../../assets/imgs/beach.jpg',
    disclosures: [
      'Solo disponible para la ciudades de Bogotá y Medellin.',
      'Queda activo 5 días después de haberlo solicitado.',
    ],
  },
  {
    title: 'Cobertura personal',
    price: '$56.600',
    img: '../../../../../assets/imgs/mountain.jpg',
    disclosures: [
      'Solo disponible para la ciudad de Bogotá.',
      'Queda activo 5 días después de haberlo solicitado.',
    ],
  },
];
