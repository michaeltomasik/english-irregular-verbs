

export class Categorize {
    constructor (words) {
        this.words = words
    }
    get allDifferent() {
        return this.words.filter((each) => {
            if (each.Infinitive !== each.SimplePast && each.Infinitive !== each.PastParticiple && each.SimplePast !== each.PastParticiple) {
                return each
            }
        })
    }
    get allSame() {
        return this.words.filter((each) => {
            if (each.Infinitive === each.SimplePast && each.Infinitive === each.PastParticiple) {
                return each
            }
        })
    }
    get infinitiveAndSimplePastSAME() {
        return this.words.filter((each) => {
            if (each.Infinitive === each.SimplePast && each.Infinitive !== each.PastParticiple) {
                return each
            }
        })
    }
    get infinitiveAndPastParticipleSAME() {
        return this.words.filter((each) => {
            if (each.Infinitive !== each.SimplePast && each.Infinitive === each.PastParticiple) {
                return each
            }
        })
    }
    get SimplePastAndPastParticipleSAME() {
        return this.words.filter((each) => {
            if (each.SimplePast === each.PastParticiple && each.Infinitive !== each.SimplePast && each.Infinitive !== each.PastParticiple) {
                return each
            }
        })
    }
}