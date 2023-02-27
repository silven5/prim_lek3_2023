export abstract class Figure2D {
    a: number = 0;
    // Необов'язковий параметр
    h?: number;
    abstract get S(): number;
}