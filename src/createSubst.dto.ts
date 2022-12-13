export type createSubstDto = {
    id?: number
    chericId: number
    name: string
    formula: string
    imageURL: string
    molWeight? : string
    normalBoilingT?: string
    normalFreezingT?: string
    triplePointT?: string
    triplePointP?: string
    criticalT?: string
    criticalP?: string
    criticalV?: string
    critialComp?: string
    accFactor?: string
    vaporPressure?: string
    heatCapGas?: string
    heatCapLiq?: string
    viscosityGas?: string
    viscosityLiq?: string
    thermalCondGas?: string
    thermalConsLiq?: string
    surfaceTension?: string
}