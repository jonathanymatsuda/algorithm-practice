const belvethUltPassive = (baseDmg, hits, bonusAD) => {
    let damage = 0;
    let minimalHits = Math.floor(hits / 2)
    for (let i = 1; i <= minimalHits; i++) {
        damage += baseDmg * i
    }
    if (!bonusAD) {
        return damage
    }
    const bonusADPercent = bonusAD * .12
    damage += damage * (bonusADPercent) / 100
    return Number(damage.toFixed(1))
};
