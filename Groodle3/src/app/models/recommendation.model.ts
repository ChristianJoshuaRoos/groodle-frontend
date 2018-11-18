import { ConcentrationRecommendation } from "./concentration-recommendation.model";

export class Recommendation
{
    constructor(
        public depthRecommendations: ConcentrationRecommendation,
        public breathRecommendations: ConcentrationRecommendation[]
    )
    {}
}