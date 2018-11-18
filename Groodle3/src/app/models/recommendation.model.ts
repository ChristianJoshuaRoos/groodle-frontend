import { ConcentrationRecommendation } from "./concentration-recommendation.model";

export class Recommendation
{
    constructor(
        public depthRecommendation: ConcentrationRecommendation,
        public breathRecommendations: ConcentrationRecommendation[]
    )
    {}
}