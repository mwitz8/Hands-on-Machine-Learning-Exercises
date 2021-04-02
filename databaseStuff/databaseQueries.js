const { Pool, Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'C&C: Napoleonics Battle Predictor',
  password: 'mwitz8',
  port: 5432,
});
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'C&C: Napoleonics Battle Predictor',
  password: 'mwitz8',
  port: 5432,
});

var index = 0;

var addCombination = function(side1, side2, games, percentSide1Won) {
  var addBattles = function(side1, side2, amount, side1Won, table) {
    var columns = ["ID", "French", "British", "Portuguese", "Spanish", "Russian", "Austrian", "Prussian", "Commander", "LineInfantry", "LightInfantry", "GrenadierInfantry", "YoungGuard", "OldGuardInfantry", "MilitiaInfantry", "FootArtillery", "GuardFootArtillery", "HorseArtillery", "GuardHorseArtillery", "LightCavalry", "LightLancerCavalry", "GuardLightCavalry", "HeavyCavalry", "HeavyCuirassierCavalry", "GuardHeavyCavalry", "RifleLightInfantry", "GuardGrenadierInfantry", "RocketBattery", "GuardLightInfantry", "MilitiaLancerCavalry", "CossackCavalry", "GrenzerInfantry", "ReserveInfantry", "FieldWorks", "Castles", "VictoryPointsOnSide", "VictoryPointsToWin", "CommandCards", "TacticianCards", "MoveFirst"];
    for (let i = 0; i < columns.length; i++) {
      if (!side1[columns[i]]) {
        side1[columns[i]] = 0;
      }
      if (!side2[columns[i]]) {
        side2[columns[i]] = 0;
      }
    }
    for (let i = 0; i < games; i++) {
      pool.query(`
        INSERT INTO public."${table}"(
          "ID", "French1", "British1", "Portuguese1", "Spanish1", "Russian1", "Austrian1", "Prussian1", "Commander1", "LineInfantry1", "LightInfantry1", "GrenadierInfantry1", "YoungGuard1", "OldGuardInfantry1", "MilitiaInfantry1", "FootArtillery1", "GuardFootArtillery1", "HorseArtillery1", "GuardHorseArtillery1", "LightCavalry1", "LightLancerCavalry1", "GuardLightCavalry1", "HeavyCavalry1", "HeavyCuirassierCavalry1", "GuardHeavyCavalry1", "RifleLightInfantry1", "GuardGrenadierInfantry1", "RocketBattery1", "GuardLightInfantry1", "MilitiaLancerCavalry1", "CossackCavalry1", "GrenzerInfantry1", "ReserveInfantry1", "FieldWorks1", "Castles1", "VictoryPointsOnSide1", "VictoryPointsToWin1", "French2", "British2", "Portuguese2", "Spanish2", "Russian2", "Austrian2", "Prussian2", "Commander2", "LineInfantry2", "LightInfantry2", "GrenadierInfantry2", "YoungGuard2", "OldGuardInfantry2", "MilitiaInfantry2", "FootArtillery2", "GuardFootArtillery2", "HorseArtillery2", "GuardHorseArtillery2", "LightCavalry2", "LightLancerCavalry2", "GuardLightCavalry2", "HeavyCavalry2", "HeavyCuirassierCavalry2", "GuardHeavyCavalry2", "RifleLightInfantry2", "GuardGrenadierInfantry2", "RocketBattery2", "GuardLightInfantry2", "MilitiaLancerCavalry2", "CossackCavalry2", "GrenzerInfantry2", "ReserveInfantry2", "FieldWorks2", "Castles2", "VictoryPointsOnSide2", "VictoryPointsToWin2", "CommandCards1", "CommandCards2", "TacticianCards1", "TacticianCards2", "MoveFirst1", "MoveFirst2", "1Won"
        ) VALUES (
          ${index}, ${side1.French}, ${side1.British}, ${side1.Portuguese}, ${side1.Spanish}, ${side1.Russian}, ${side1.Austrian}, ${side1.Prussian}, ${side1.Commander}, ${side1.LineInfantry}, ${side1.LightInfantry}, ${side1.GrenadierInfantry}, ${side1.YoungGuard}, ${side1.OldGuardInfantry}, ${side1.MilitiaInfantry}, ${side1.FootArtillery}, ${side1.GuardFootArtillery}, ${side1.HorseArtillery}, ${side1.GuardHorseArtillery}, ${side1.LightCavalry}, ${side1.LightLancerCavalry}, ${side1.GuardLightCavalry}, ${side1.HeavyCavalry}, ${side1.HeavyCuirassierCavalry}, ${side1.GuardHeavyCavalry}, ${side1.RifleLightInfantry}, ${side1.GuardGrenadierInfantry}, ${side1.RocketBattery}, ${side1.GuardLightInfantry}, ${side1.MilitiaLancerCavalry}, ${side1.CossackCavalry}, ${side1.GrenzerInfantry}, ${side1.ReserveInfantry}, ${side1.FieldWorks}, ${side1.Castles}, ${side1.VictoryPointsOnSide}, ${side1.VictoryPointsToWin}, ${side2.French}, ${side2.British}, ${side2.Portuguese}, ${side2.Spanish}, ${side2.Russian}, ${side2.Austrian}, ${side2.Prussian}, ${side2.Commander}, ${side2.LineInfantry}, ${side2.LightInfantry}, ${side2.GrenadierInfantry}, ${side2.YoungGuard}, ${side2.OldGuardInfantry}, ${side2.MilitiaInfantry}, ${side2.FootArtillery}, ${side2.GuardFootArtillery}, ${side2.HorseArtillery}, ${side2.GuardHorseArtillery}, ${side2.LightCavalry}, ${side2.LightLancerCavalry}, ${side2.GuardLightCavalry}, ${side2.HeavyCavalry}, ${side2.HeavyCuirassierCavalry}, ${side2.GuardHeavyCavalry}, ${side2.RifleLightInfantry}, ${side2.GuardGrenadierInfantry}, ${side2.RocketBattery}, ${side2.GuardLightInfantry}, ${side2.MilitiaLancerCavalry}, ${side2.CossackCavalry}, ${side2.GrenzerInfantry}, ${side2.ReserveInfantry}, ${side2.FieldWorks}, ${side2.Castles}, ${side2.VictoryPointsOnSide}, ${side2.VictoryPointsToWin}, ${side1.CommandCards}, ${side2.CommandCards}, ${side1.TacticianCards}, ${side2.TacticianCards}, ${side1.MoveFirst}, ${side2.MoveFirst}, ${side1Won}
        );
        `, (err, res) => {
        console.log(err, res);
      });
      console.log('uploaded datapoint ' + index);
      index++;
    }
  }
  let table = '';
  if (Math.random() <= 0.2) {
    table = 'BattlesTest';
  } else {
    table = "BattlesTraining";
  }
  addBattles(side1, side2, Math.round(games * percentSide1Won), 1, table);
  addBattles(side1, side2, Math.round(games * (1 - percentSide1Won)), 0, table);
  addBattles(side2, side1, Math.round(games * (1 - percentSide1Won)), 1, table);
  addBattles(side2, side1, Math.round(games * percentSide1Won), 0, table);
}

var updateDatabase = function() {
  pool.query(`
    DELETE FROM public."Battles";
  `);
  addCombination({ //MM1 Jemappes
    Austrian: 1,
    LineInfantry: 4,
    LightInfantry: 2,
    LightCavalry: 2,
    FootArtillery: 2,
    Commander: 2,
    FieldWorks: 2,
    VictoryPointsToWin: 6,
    CommandCards: 5,
    TacticianCards: 3
  }, {
    French: 1,
    LineInfantry: 7,
    MilitiaInfantry: 2,
    LightInfantry: 3,
    GrenadierInfantry: 1,
    LightCavalry: 2,
    FootArtillery: 3,
    VictoryPointsToWin: 6,
    CommandCards: 5,
    TacticianCards: 3,
    MoveFirst: 1
  }, 2, 0.5);
  addCombination({ //FG01 Alentejo
    Portuguese: 1,
    LineInfantry: 5,
    MilitiaInfantry: 1,
    Commander: 3,
    FootArtillery: 2,
    LightInfantry: 2,
    HeavyCavalry: 1,
    LightCavalry: 1,
    VictoryPointsToWin: 8,
    VictoryPointsOnSide: 5,
    FieldWorks: 3,
    Castles: 1,
    CommandCards: 4,
    TacticianCards:2
  }, {
    Spanish: 1,
    LineInfantry: 8,
    LightInfantry: 2,
    FootArtillery: 2,
    GrenadierInfantry: 2,
    LightCavalry: 2,
    HeavyCavalry: 1,
    Commander: 4,
    VictoryPointsToWin: 8,
    CommandCards: 5,
    TacticianCards: 4,
    MoveFirst: 1
  }, 19, 0.58);
  addCombination({ //GG07 Marengo
    Austrian: 1,
    LineInfantry: 8,
    LightInfantry: 2,
    LightCavalry: 3,
    HeavyCavalry: 1,
    HorseArtillery: 1,
    FootArtillery: 2,
    Commander: 4,
    GrenzerInfantry: 1,
    VictoryPointsToWin: 9,
    MoveFirst: 1,
    CommandCards: 5,
    TacticianCards: 3
  }, {
    French: 1,
    LineInfantry: 6,
    LightInfantry: 1,
    LightCavalry: 3,
    HeavyCavalry: 1,
    Commander: 4,
    HorseArtillery: 1,
    FootArtillery: 1,
    YoungGuard: 1,
    VictoryPointsToWin: 9,
    CommandCards: 6,
    TacticianCards: 3
  }, 11, 0.45);
  addCombination({ //301 Wertingen
    Austrian: 1,
    LineInfantry: 9,
    GrenadierInfantry: 2,
    LightCavalry: 1,
    HeavyCuirassierCavalry: 1,
    FootArtillery: 1,
    Commander: 2,
    VictoryPointsToWin: 5,
    CommandCards: 4,
    TacticianCards: 2
  }, {
    French: 1,
    LightInfantry: 2,
    GrenadierInfantry: 2,
    LightCavalry: 2,
    HeavyCavalry: 4,
    HorseArtillery: 1,
    Commander: 4,
    VictoryPointsToWin: 5,
    CommandCards: 5,
    TacticianCards: 3,
    MoveFirst: 1
  }, 95, 0.36);
  addCombination({ //302 Gunzburg
    Austrian: 1,
    LineInfantry: 1,
    LightInfantry: 2,
    GrenadierInfantry: 3,
    LightCavalry: 2,
    FootArtillery: 3,
    Commander: 2,
    VictoryPointsOnSide: 1,
    VictoryPointsToWin: 7,
    CommandCards: 5,
    TacticianCards: 3
  }, {
    French: 1,
    LineInfantry: 7,
    LightInfantry: 3,
    GrenadierInfantry: 1,
    LightCavalry: 1,
    FootArtillery: 2,
    Commander: 4,
    VictoryPointsToWin: 7,
    CommandCards: 5,
    TacticianCards: 3,
    MoveFirst: 1
  }, 79, 0.62);
  addCombination({ //303 Haslach-Jungingen
    Austrian: 1,
    LineInfantry: 7,
    GrenadierInfantry: 1,
    LightCavalry: 1,
    HeavyCuirassierCavalry: 2,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 2,
    VictoryPointsToWin: 6,
    CommandCards: 4,
    TacticianCards: 2
  }, {
    French: 1,
    LineInfantry: 4,
    LightInfantry: 2,
    LightCavalry: 2,
    HeavyCavalry: 2,
    FootArtillery: 2,
    Commander: 4,
    VictoryPointsToWin: 6,
    CommandCards: 5,
    TacticianCards: 4,
    MoveFirst: 1
  }, 85, 0.38);
  addCombination({ //304 Elchingen
    Austrian: 1,
    LineInfantry: 5,
    GrenadierInfantry: 2,
    LightCavalry: 1,
    HeavyCuirassierCavalry: 2,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 3,
    VictoryPointsToWin: 7,
    CommandCards: 4,
    TacticianCards: 3
  }, {
    French: 1,
    LineInfantry: 6,
    LightInfantry: 3,
    LightCavalry: 1,
    HeavyCavalry: 2,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 4,
    MoveFirst: 1,
    VictoryPointsToWin: 7,
    CommandCards: 6,
    TacticianCards: 4
  }, 90, 0.45);
  addCombination({ //305 Mariazell
    Austrian: 1,
    LineInfantry: 6,
    GrenadierInfantry: 1,
    GrenzerInfantry: 1,
    FootArtillery: 1,
    Commander: 1,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 4
  }, {
    French: 1,
    LineInfantry: 2,
    LightInfantry: 2,
    LightCavalry: 2,
    FootArtillery: 1,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 4
  }, 50, 0.36)
  addCombination({ //604 Austerlitz
    Russian: 1,
    LineInfantry: 6,
    LightInfantry: 4,
    GuardLightInfantry: 1,
    GuardGrenadierInfantry: 1,
    CossackCavalry: 3,
    LightCavalry: 3,
    HeavyCavalry: 2,
    HeavyCuirassierCavalry: 1,
    FootArtillery: 2,
    HorseArtillery: 2,
    Commander: 4,
    VictoryPointsOnSide: 1,
    VictoryPointsToWin: 11,
    MoveFirst: 1,
    CommandCards: 5,
    TacticianCards: 3
  }, {
    French: 1,
    LineInfantry: 8,
    LightInfantry: 4,
    LightCavalry: 3,
    HeavyCavalry: 2,
    HeavyCuirassierCavalry: 1,
    GuardHeavyCavalry: 1,
    HorseArtillery: 1,
    FootArtillery: 2,
    Commander: 4,
    CommandCards: 6,
    TacticianCards: 5,
    VictoryPointsOnSide: 1,
    VictoryPointsToWin: 11
  }, 28, 0.29);
  addCombination({ //BH01 Caldiero
    Austrian: 1,
    LineInfantry: 7,
    GrenadierInfantry: 3,
    GrenzerInfantry: 1,
    LightCavalry: 1,
    HeavyCavalry : 1,
    LightLancerCavalry: 1,
    FootArtillery: 2,
    Commander: 3,
    VictoryPointsOnSide: 2,
    VictoryPointsToWin: 8,
    CommandCards: 5,
    TacticianCards: 3,
    MoveFirst: 1,
  }, {
    French: 1,
    LineInfantry: 8,
    LightInfantry: 2,
    GrenadierInfantry: 1,
    LightCavalry: 2,
    HeavyCavalry: 1,
    FootArtillery: 2,
    Commander: 3,
    VictoryPointsOnSide: 1,
    VictoryPointsToWin: 8,
    CommandCards: 6,
    TacticianCards: 5
  }, 5, 0.8);
  addCombination({ //BH02 Durenstein
    Russian: 1,
    LineInfantry: 7,
    LightInfantry: 3,
    GrenadierInfantry: 4,
    LightCavalry: 2,
    FootArtillery: 3,
    Commander: 4,
    MoveFirst: 1,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    LineInfantry: 6,
    LightInfantry: 2,
    HeavyCavalry: 1,
    FootArtillery: 1,
    Commander: 4,
    VictoryPointsToWin: 7,
    CommandCards: 5,
    TacticianCards: 2,
    VictoryPointsOnSide: 3,
    VictoryPointsToWin: 7
  }, 4, 0.5);
  addCombination({ //LC01 Maida
    British: 1,
    LineInfantry: 6,
    LightInfantry: 1,
    RifleLightInfantry: 1,
    GrenadierInfantry: 1,
    HorseArtillery: 1,
    Commander: 3,
    VictoryPointsToWin: 4,
    CommandCards: 5
  }, {
    French: 1,
    LineInfantry: 5,
    LightInfantry: 3,
    LightCavalry: 1,
    FootArtillery: 1,
    Commander: 3,
    VictoryPointsToWin: 4,
    CommandCards: 5,
    MoveFirst: 1
  }, 8, 0.38);
  addCombination({ //PS06 Austerlitz
    Russian: 1,
    LineInfantry: 3,
    LightInfantry: 2,
    GuardLightInfantry: 1,
    LightCavalry: 3,
    HeavyCavalry: 2,
    CossackCavalry: 2,
    HorseArtillery: 1,
    Commander: 3,
    VictoryPointsOnSide: 1,
    VictoryPointsToWin: 7,
    CommandCards: 5,
    TacticianCards: 4
  }, {
    French: 1,
    LineInfantry: 4,
    LightInfantry: 2,
    LightCavalry: 2,
    HeavyCuirassierCavalry: 2,
    HeavyCavalry: 1,
    HorseArtillery: 1,
    Commander: 4,
    FieldWorks: 1,
    VictoryPointsOnSide: 1,
    VictoryPointsToWin: 7,
    CommandCards: 5,
    TacticianCards: 4,
    MoveFirst: 1
  }, 1, 1.0);
  addCombination({ //201 Czarnowo
    Russian: 1,
    LineInfantry: 5,
    LightInfantry: 4,
    GrenadierInfantry: 2,
    LightCavalry: 1,
    HeavyCuirassierCavalry: 1,
    CossackCavalry: 1,
    FootArtillery: 2,
    Commander: 4,
    FieldWorks: 3,
    CommandCards: 4,
    TacticianCards: 3,
    VictoryPointsOnSide: 1,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    LineInfantry: 9,
    LightInfantry: 2,
    LightCavalry: 1,
    FootArtillery: 2,
    Commander: 4,
    MoveFirst: 1,
    CommandCards: 6,
    TacticianCards: 5,
    VictoryPointsToWin: 7
  }, 117, 0.37);
  addCombination({ //204 Pultusk
    LineInfantry: 8,
    LightInfantry: 4,
    GrenadierInfantry: 2,
    LightCavalry: 2,
    HeavyCavalry: 1,
    GuardLightCavalry: 1,
    CossackCavalry: 3,
    FootArtillery: 4,
    HorseArtillery: 1,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsOnSide: 1,
    VictoryPointsToWin: 10
  }, {
    French: 1,
    LineInfantry: 9,
    LightInfantry: 4,
    LightCavalry: 2,
    HeavyCavalry: 1,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 5,
    CommandCards: 5,
    TacticianCards: 5,
    MoveFirst: 1,
    VictoryPointsToWin: 10
  }, 56, 0.63);
  addCombination({ //204 Mohrungen
    Russian: 1,
    LineInfantry: 3,
    LightInfantry: 5,
    GrenadierInfantry: 1,
    LightCavalry: 1,
    FootArtillery: 1,
    Commander: 2,
    CommandCards: 4,
    TacticianCards: 3,
    VictoryPointsOnSide: 4,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    LineInfantry: 7,
    LightInfantry: 4,
    LightCavalry: 1,
    HeavyCavalry: 1,
    FootArtillery: 1,
    Commander: 4,
    CommandCards: 4,
    TacticianCards: 3,
    MoveFirst: 1,
    VictoryPointsToWin: 7
  }, 53, 0.26);
  addCombination({ //205 Eylau
    Russian: 1,
    LineInfantry: 5,
    LightInfantry: 4,
    GrenadierInfantry: 2,
    LightCavalry: 2,
    FootArtillery: 2,
    Commander: 2,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    LineInfantry: 9,
    LightInfantry: 3,
    LightCavalry: 3,
    HeavyCavalry: 1,
    HorseArtillery: 2,
    Commander: 4,
    MoveFirst: 1,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 7
  }, 72, 0.24);
  addCombination({ //206 Eylau
    Russian: 1,
    LineInfantry: 6,
    LightInfantry: 2,
    GrenadierInfantry: 3,
    LightCavalry: 2,
    HeavyCavalry: 1,
    HeavyCuirassierCavalry: 1,
    CossackCavalry: 2,
    FootArtillery: 4,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    LineInfantry: 9,
    LightInfantry: 2,
    OldGuardInfantry: 1,
    LightCavalry: 2,
    FootArtillery: 2,
    Commander: 4,
    CommandCards: 6,
    TacticianCards: 6,
    VictoryPointsToWin: 7,
    MoveFirst: 1
  }, 78, 0.51);
  addCombination({ //207 Elyau
    Russian: 1,
    LineInfantry: 5,
    LightInfantry: 3,
    GrenadierInfantry: 3,
    LightCavalry: 2,
    HeavyCuirassierCavalry: 1,
    CossackCavalry: 2,
    FootArtillery: 3,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 4,
    MoveFirst: 1,
    VictoryPointsToWin: 9
  }, {
    French: 1,
    LineInfantry: 5,
    LightInfantry: 1,
    OldGuardInfantry: 1,
    LightCavalry: 2,
    HeavyCuirassierCavalry: 2,
    HeavyCavalry: 2,
    GuardHeavyCavalry: 1,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 4,
    CommandCards: 6,
    TacticianCards: 6,
    VictoryPointsToWin: 9
  }, 44, 0.23);
  addCombination({ //208 Heilsberg
    Russian: 1,
    LineInfantry: 4,
    LightInfantry: 5,
    LightCavalry: 2,
    CossackCavalry:3,
    FootArtillery: 3,
    Commander: 2,
    VictoryPointsOnSide: 3,
    VictoryPointsToWin: 8,
    CommandCards: 5,
    TacticianCards: 4
  }, {
    French: 1,
    LineInfantry: 7,
    LightInfantry: 2,
    GrenadierInfantry: 1,
    LightCavalry: 3,
    HeavyCavalry: 1,
    FootArtillery: 2,
    Commander: 3,
    VictoryPointsToWin: 8,
    MoveFirst: 1,
    CommandCards: 6,
    TacticianCards: 6
  }, 38, 0.37);
  addCombination({ //209 Friedland
    Russian: 1,
    LineInfantry: 5,
    LightInfantry: 3,
    GrenadierInfantry: 1,
    GuardGrenadierInfantry: 1,
    LightCavalry: 2,
    HeavyCavalry: 1,
    CossackCavalry: 2,
    FootArtillery: 3,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 8
  }, {
    French: 1,
    LineInfantry: 7,
    LightInfantry: 3,
    GrenadierInfantry: 1,
    OldGuardInfantry: 1,
    LightCavalry: 3,
    HeavyCavalry: 1,
    GuardHeavyCavalry: 1,
    FootArtillery: 1,
    Horse: 1,
    Commander: 5,
    CommandCards: 6,
    TacticianCards: 6,
    MoveFirst: 1,
    VictoryPointsToWin: 8
  }, 44, 0.27);
  addCombination({ //402 Saalfeld
    Prussian: 1,
    LineInfantry: 6,
    LightInfantry: 2,
    LightCavalry: 3,
    FootArtillery: 1,
    HorseArtillery: 2,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 4,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    MoveFirst: 1,
    LineInfantry: 8,
    LightInfantry: 3,
    LightCavalry: 3,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 7
  }, 53, 0.19);
  addCombination({ //403 Jena
    Prussian: 1,
    LineInfantry: 7,
    LightInfantry: 2,
    GrenadierInfantry: 2,
    LightCavalry: 2,
    HeavyCuirassierCavalry: 1,
    LightLancerCavalry: 1,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 4,
    VictoryPointsOnSide: 1,
    VictoryPointsToWin: 8,
    CommandCards: 4,
    TacticianCards: 3
  }, {
    French: 1,
    LineInfantry: 7,
    LightInfantry: 3,
    YoungGuard: 1,
    LightCavalry: 4,
    HeavyCuirassierCavalry: 1,
    GuardHeavyCavalry: 1,
    FootArtillery: 1,
    HorseArtillery: 1,
    GuardFootArtillery: 1,
    Commander: 5,
    CommandCards: 6,
    TacticianCards: 6,
    MoveFirst: 1
  }, 60, 0.38);
  addCombination({ //404 Auerstadt
    Prussian: 1,
    LineInfantry: 8,
    GrenadierInfantry: 2,
    GuardGrenadierInfantry: 1,
    LightCavalry: 1,
    HeavyCavalry: 3,
    HeavyCuirassierCavalry: 1,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 4,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsOnSide: 2,
    VictoryPointsToWin: 10
  }, {
    French: 1,
    LineInfantry: 10,
    LightInfantry: 3,
    LightCavalry: 2,
    FootArtillery: 3,
    HorseArtillery: 1,
    Commander: 5,
    VictoryPointsToWin: 10,
    CommandCards: 6,
    TacticianCards: 5
  }, 65, 0.2);
  addCombination({ //405 Halle
    Prussian: 1,
    LineInfantry: 1,
    LightInfantry: 2,
    LightCavalry: 1,
    HeavyCavalry: 1,
    HorseArtillery: 2,
    Commander: 1,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 4
  }, {
    French: 1,
    LineInfantry: 2,
    LightInfantry: 3,
    LightCavalry: 1,
    FootArtillery: 2,
    Commander: 2,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 4,
    MoveFirst: 1
  }, 38, 0.29);
  addCombination({ //406 Halle
    Prussian: 1,
    LineInfantry: 5,
    LightInfantry: 2,
    GrenadierInfantry: 2,
    LightCavalry: 2,
    HeavyCavalry: 1,
    FootArtillery: 2,
    HorseArtillery: 2,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 8
  }, {
    French: 1,
    LineInfantry: 7,
    LightInfantry: 4,
    LightCavalry: 4,
    FootArtillery: 2,
    HorseArtillery: 2,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 4,
    MoveFirst: 1,
    VictoryPointsToWin: 8
  }, 29, 0.21);
  addCombination({ //407 Altenzaun
    Prussian: 1,
    LineInfantry: 2,
    LightInfantry: 5,
    FootArtillery: 2,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 4,
    MoveFirst: 1,
    VictoryPointsToWin: 5
  }, {
    French: 1,
    LineInfantry: 6,
    LightInfantry: 2,
    LightCavalry: 4,
    FootArtillery: 2,
    Commander: 2,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 5
  }, 41, 0.61);
  addCombination({ //408 Zehdenick
    Prussian: 1,
    LightInfantry: 1,
    LightCavalry: 3,
    HeavyCavalry: 3,
    HorseArtillery: 1,
    Commander: 3,
    MoveFirst: 0.5,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 4
  }, {
    French: 1,
    LightCavalry: 3,
    HeavyCavalry: 6,
    HorseArtillery: 1,
    Commander: 3,
    MoveFirst: 0.5,
    CommandCards: 4,
    TacticianCards: 4,
    VictoryPointsToWin: 4
  }, 26, 0.19);
  addCombination({ //410 Waren-Nossentin
    Prussian: 1,
    LightInfantry: 4,
    LightCavalry: 3,
    HeavyCavalry: 1,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 4,
    VictoryPointsToWin: 4
  }, {
    French: 1,
    LightInfantry: 3,
    LightCavalry: 6,
    LightLancerCavalry: 1,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 4,
    CommandCards: 4,
    TacticianCards: 4,
    MoveFirst: 1,
    VictoryPointsToWin: 4
  }, 22, 0.18);
  addCombination({ //411 Waren-Nossentin
    Prussian: 1,
    LightInfantry: 5,
    LightCavalry: 2,
    HeavyCavalry: 1,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 4,
    MoveFirst: 1,
    VictoryPointsToWin: 5
  }, {
    French: 1,
    LineInfantry: 4,
    LightInfantry: 3,
    LightCavalry: 4,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 4,
    VictoryPointsToWin: 5
  }, 24, 0.33);
  addCombination({ //412 Lubeck
    Prussian: 1,
    VictoryPointsOnSide: 1,
    FieldWorks: 2,
    Castles: 1,
    LineInfantry: 2,
    LightInfantry: 2,
    GrenadierInfantry: 1,
    LightCavalry: 1,
    FootArtillery: 4,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 5,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    LineInfantry: 8,
    LightInfantry: 3,
    LightCavalry: 2,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 7,
    MoveFirst: 1
  }, 35, 0.46);
  addCombination({ //004 Corunna
    British: 1,
    LineInfantry: 6,
    LightInfantry: 2,
    RifleLightInfantry: 1,
    GuardGrenadierInfantry: 1,
    LightCavalry: 1,
    FootArtillery: 1,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 6
  }, {
    French: 1,
    LineInfantry: 8,
    LightInfantry: 3,
    HeavyCavalry: 2,
    FootArtillery: 2,
    Commander: 3,
    CommandCards:5,
    TacticianCards: 5,
    VictoryPointsToWin: 6,
    MoveFirst: 1
  }, 150, 0.56);
  addCombination({ //005 Talavera
    British: 1,
    LineInfantry: 6,
    LightInfantry: 1,
    RifleLightInfantry: 1,
    GuardGrenadierInfantry: 1,
    LightCavalry: 3,
    GuardHeavyCavalry: 1,
    FootArtillery: 3,
    Commander: 3,
    CommandCards: 6,
    TacticianCards: 5,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    LineInfantry: 10,
    LightInfantry: 3,
    LightCavalry: 2,
    HeavyCavalry: 1,
    FootArtillery: 3,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 2,
    MoveFirst: 1,
    VictoryPointsToWin: 7
  }, 157, 0.46);
  addCombination({ //011 Salamanca
    British: 1,
    LineInfantry: 7,
    LightInfantry: 1,
    RifleLightInfantry: 1,
    GuardGrenadierInfantry: 2,
    LightCavalry: 2,
    HeavyCavalry: 2,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 3,
    MoveFirst: 1,
    CommandCards: 6,
    TacticianCards: 6,
    VictoryPointsToWin: 6
  }, {
    French: 1,
    LineInfantry: 8,
    LightInfantry: 3,
    LightCavalry: 1,
    FootArtillery: 2,
    Commander: 2,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 6
  }, 77, 0.57);
  addCombination({ //103 Gamonal
    Spanish: 1,
    LineInfantry: 5,
    GrenadierInfantry: 2,
    MilitiaInfantry: 1,
    LightCavalry: 3,
    HeavyCavalry: 1,
    FootArtillery: 2,
    Commander: 2,
    CommandCards: 5,
    TacticianCards: 2,
    VictoryPointsToWin: 6
  }, {
    French: 1,
    LineInfantry: 6,
    LightInfantry: 2,
    MilitiaInfantry: 1,
    LightCavalry: 2,
    HeavyCavalry: 3,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 6,
    TacticianCards: 5,
    MoveFirst: 1,
    VictoryPointsToWin: 6
  }, 52, 0.17);
  addCombination({ //104 Espinosa de los Monteros
    Spanish: 1,
    LineInfantry: 6,
    LightInfantry: 2,
    GrenadierInfantry: 2,
    MilitiaInfantry: 3,
    LightCavalry: 2,
    FootArtillery: 2,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    LineInfantry: 10,
    MoveFirst: 1,
    LightInfantry: 2,
    LightCavalry: 2,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 7
  }, 75, 0.47);
  addCombination({ //105 Somosierra
    Spanish: 1,
    LineInfantry: 9,
    LightInfantry: 1,
    GrenadierInfantry: 2,
    LightCavalry: 2,
    FootArtillery: 3,
    Commander: 3,
    FieldWorks: 1,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    LineInfantry: 7,
    LightInfantry: 3,
    LightCavalry: 2,
    GuardLightCavalry: 2,
    GuardFootArtillery: 1,
    Commander: 2,
    CommandCards: 6,
    TacticianCards: 6,
    MoveFirst: 1,
    VictoryPointsToWin: 7
  }, 46, 0.22);
  addCombination({ //107 Alcaniz
    Spanish: 1,
    LineInfantry: 8,
    LightInfantry: 1,
    LightCavalry: 1,
    FootArtillery: 3,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 6
  }, {
    French: 1,
    LineInfantry: 9,
    LightCavalry: 1,
    HeavyCuirassierCavalry: 1,
    FootArtillery: 2,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 5,
    MoveFirst: 1,
    VictoryPointsToWin: 6
  }, 70, 0.44);
  addCombination({ //108 Maria
    Spanish: 1,
    LineInfantry: 7,
    LightInfantry: 2,
    GrenadierInfantry: 1,
    LightCavalry: 2,
    FootArtillery: 2,
    Commander: 2,
    CommandCards: 5,
    TacticianCards: 3,
    MoveFirst: 1,
    VictoryPointsToWin: 6
  }, {
    French: 1,
    LineInfantry: 8,
    LightInfantry: 1,
    LightCavalry: 2,
    HeavyCuirassierCavalry: 1,
    FootArtillery: 2,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 6
  }, 43, 0.37);
  addCombination({ //110 Tamames
    Spanish: 1,
    LineInfantry: 11,
    LightInfantry: 2,
    GrenadierInfantry: 2,
    LightCavalry: 3,
    HeavyCavalry: 2,
    FootArtillery: 2,
    Commander: 4,
    CommandCards: 6,
    TacticianCards: 2,
    VictoryPointsToWin: 8
  }, {
    French: 1,
    LineInfantry: 9,
    LightInfantry: 3,
    LightCavalry: 3,
    HeavyCavalry: 1,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 4,
    MoveFirst: 1,
    CommandCards: 6,
    TacticianCards: 3,
    VictoryPointsToWin: 8
  }, 42, 0.36);
  addCombination({ //111 Ocana
    Spanish: 1,
    LightCavalry: 7,
    HeavyCavalry: 5,
    HeavyCuirassierCavalry: 1,
    Commander: 2,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    LightCavalry: 5,
    HeavyCavalry: 5,
    HorseArtillery: 2,
    Commander: 2,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 7
  }, 31, 0.13);
  addCombination({ //112 Ocana
    Spanish: 1,
    LineInfantry: 9,
    LightInfantry: 1,
    GrenadierInfantry: 1,
    LightCavalry: 2,
    HeavyCavalry: 1,
    FootArtillery: 1,
    Commander: 4,
    CommandCards: 4,
    TacticianCards: 3,
    VictoryPointsToWin: 6
  }, {
    French: 1,
    LineInfantry: 8,
    LightInfantry: 2,
    HeavyCavalry: 2,
    LightLancerCavalry: 1,
    FootArtillery: 1,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 5,
    MoveFirst: 1,
    VictoryPointsToWin: 6
  }, 29, 0.28);
  addCombination({ //113 Alba de Tormes
    Spanish: 1,
    LineInfantry: 7,
    MilitiaInfantry: 3,
    LightCavalry: 3,
    FootArtillery: 1,
    Commander: 2,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 6
  }, {
    French: 1,
    LightCavalry: 3,
    HeavyCavalry: 6,
    Commander: 2,
    CommandCards: 5,
    TacticianCards: 4,
    MoveFirst: 1,
    VictoryPointsToWin: 6
  }, 27, 0.0);
  addCombination({ //117 San Marcial
    Spanish: 1,
    LineInfantry: 6,
    LightInfantry: 2,
    GrenadierInfantry: 2,
    MilitiaInfantry: 1,
    FootArtillery: 2,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsOnSide: 3,
    VictoryPointsToWin: 8
  }, {
    French: 1,
    LineInfantry: 9,
    LightInfantry: 2,
    MilitiaInfantry: 2,
    FootArtillery: 2,
    Commander: 3,
    MoveFirst: 1,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 8
  }, 27, 0.81);
  addCombination({ //JH01 Las Eras
    Spanish: 1,
    FieldWorks: 6,
    Castles: 1,
    LineInfantry: 2,
    MilitiaInfantry: 18,
    LightCavalry: 1,
    FootArtillery: 2,
    Commander: 4,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 8
  }, {
    French: 1,
    LineInfantry: 8,
    LightCavalry: 2,
    FootArtillery: 1,
    LightLancerCavalry: 1,
    Commander: 1,
    MoveFirst: 1,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 8
  }, 1, 1.0);
  addCombination({ //306 Clash At Pordenone
    Austrian: 1,
    LineInfantry: 2,
    GrenzerInfantry: 2,
    LightCavalry: 4,
    LightLancerCavalry: 1,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 3,
    MoveFirst: 1,
    VictoryPointsToWin: 5
  }, {
    French: 1,
    LineInfantry: 4,
    LightCavalry: 4,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 2,
    CommandCards: 4,
    TacticianCards: 3,
    VictoryPointsToWin: 5
  }, 56, 0.66);
  addCombination({ //307 Sacile
    VictoryPointsOnSide: 1,
    Austrian: 1,
    LineInfantry: 5,
    GrenadierInfantry: 3,
    GrenzerInfantry: 3,
    LightCavalry: 2,
    HeavyCavalry: 1,
    FootArtillery: 3,
    Commander: 5,
    CommandCards: 5,
    TacticianCards: 2,
    VictoryPointsToWin: 8
  }, {
    French: 1,
    LineInfantry: 12,
    LightInfantry: 2,
    LightCavalry: 2,
    FootArtillery: 3,
    Commander: 5,
    CommandCards: 5,
    TacticianCards: 3,
    MoveFirst: 1,
    VictoryPointsToWin: 8
  }, 47, 0.70);
  addCombination({ //308 Teugen-Hausen
    VictoryPointsOnSide: 3,
    Austrian: 1,
    LineInfantry: 10,
    GrenzerInfantry: 2,
    LightCavalry: 1,
    FootArtillery: 2,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 3,
    VictoryPointsToWin: 8
  }, {
    French: 1,
    LineInfantry: 9,
    LightInfantry: 3,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 5,
    MoveFirst: 1,
    VictoryPointsToWin: 8
  }, 61, 0.62);
  addCombination({ //309 Rohr
    Austrian: 1,
    LineInfantry: 6,
    GrenzerInfantry: 1,
    LightCavalry: 1,
    HeavyCavalry: 1,
    FootArtillery: 1,
    Commander: 2,
    MoveFirst: 1,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 5
  }, {
    French: 1,
    LineInfantry: 8,
    LightInfantry: 2,
    LightCavalry: 3,
    HeavyCuirassierCavalry: 1,
    FootArtillery: 1,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 5
  }, 52, 0.40);
  addCombination({ //310 Eggmuhl
    Austrian: 1,
    LineInfantry: 11,
    GrenzerInfantry: 1,
    LightCavalry: 1,
    FootArtillery: 1,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 3,
    VictoryPointsToWin: 6
  }, {
    French: 1,
    LineInfantry: 10,
    LightInfantry: 3,
    FootArtillery: 2,
    Commander: 4,
    MoveFirst: 1,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 6
  }, 52, 0.44);
  addCombination({ //311 Eggmuhl
    Austrian: 1,
    VictoryPointsOnSide: 2,
    Castles: 1,
    LineInfantry: 4,
    GrenzerInfantry: 3,
    FootArtillery: 2,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 5
  }, {
    French: 1,
    LineInfantry: 4,
    LightInfantry: 5,
    HorseArtillery: 1,
    Commander: 2,
    CommandCards: 5,
    TacticianCards: 2,
    MoveFirst: 1,
    VictoryPointsToWin: 5
  }, 40, 0.48);
  addCombination({ //312 Eggmuhl
    FieldWorks: 1,
    Austrian: 1,
    LineInfantry: 10,
    GrenadierInfantry: 2,
    GrenzerInfantry: 3,
    LightCavalry: 3,
    FootArtillery: 3,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 9
  }, {
    French: 1,
    LineInfantry: 12,
    LightInfantry: 2,
    LightCavalry: 4,
    HeavyCuirassierCavalry: 2,
    FootArtillery: 2,
    Commander: 4,
    CommandCards: 6,
    TacticianCards: 5,
    MoveFirst: 1,
    VictoryPointsToWin: 9
  }, 35, 0.40);
  addCombination({ //313 Eggmuhl
    Austrian: 1,
    LineInfantry: 9,
    GrenzerInfantry: 2,
    LightCavalry: 3,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 8
  }, {
    French: 1,
    LineInfantry: 8,
    LightInfantry: 4,
    HeavyCuirassierCavalry: 4,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 4,
    MoveFirst: 1,
    CommandCards: 6,
    TacticianCards: 6,
    VictoryPointsToWin: 8
  }, 28, 0.14);
  addCombination({ //315 Aspern-Essling
    Austrian: 1,
    LineInfantry: 10,
    LightInfantry: 2,
    GrenzerInfantry: 1,
    MilitiaInfantry: 2,
    LightCavalry: 2,
    HeavyCavalry: 1,
    HeavyCuirassierCavalry: 1,
    LightLancerCavalry: 1,
    FootArtillery: 3,
    Commander: 4,
    MoveFirst: 1,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 12
  }, {
    French: 1,
    VictoryPointsOnSide: 3,
    LineInfantry: 7,
    LightInfantry: 3,
    LightCavalry: 2,
    HeavyCuirassierCavalry: 2,
    GuardHeavyCavalry: 1,
    FootArtillery: 3,
    Commander: 6,
    CommandCards: 6,
    TacticianCards: 6,
    VictoryPointsToWin: 12
  }, 39, 0.38);
  addCombination({ //316 Aspern-Essling
    Austrian: 1,
    MoveFirst: 1,
    LineInfantry: 10,
    LightInfantry: 1,
    MilitiaInfantry: 1,
    LightCavalry: 3,
    HeavyCavalry: 1,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 9
  }, {
    French: 1,
    VictoryPointsOnSide: 2,
    LineInfantry: 5,
    LightInfantry: 3,
    LightCavalry: 3,
    HeavyCuirassierCavalry: 1,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 4,
    CommandCards: 6,
    TacticianCards: 6,
    VictoryPointsToWin: 9
  }, 38, 0.50);
  addCombination({ //318 Wagram
    Austrian: 1,
    LineInfantry: 8,
    LightInfantry: 1,
    MilitiaInfantry: 2,
    LightCavalry: 1,
    FootArtillery: 3,
    Commander: 3,
    VictoryPointsToWin: 6,
    CommandCards: 4,
    TacticianCards: 3,
    FieldWorks: 2
  }, {
    French: 1,
    MoveFirst: 1,
    LineInfantry: 7,
    LightInfantry: 5,
    LightCavalry: 3,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 6
  }, 43, 0.51);
  addCombination({ //320 Wagram
    Austrian: 1,
    VictoryPointsOnSide: 1,
    LineInfantry: 10,
    LightInfantry: 2,
    MilitiaInfantry: 1,
    LightCavalry: 4,
    HeavyCuirassierCavalry: 1,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 5,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 12
  }, {
    French: 1,
    LineInfantry: 11,
    LightInfantry: 4,
    LightCavalry: 3,
    HeavyCuirassierCavalry: 1,
    HeavyCavalry: 2,
    FootArtillery: 4,
    HorseArtillery: 1,
    Commander: 6,
    MoveFirst: 1,
    CommandCards: 6,
    TacticianCards: 5,
    VictoryPointsToWin: 12
  }, 30, 0.33);
  addCombination({ //BH03 Landshut
    Austrian: 1,
    Castles: 1,
    VictoryPointsOnSide: 1,
    LineInfantry: 5,
    LightInfantry: 1,
    GrenzerInfantry: 2,
    LightCavalry: 1,
    LightLancerCavalry: 1,
    FootArtillery: 2,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 2,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    LineInfantry: 7,
    LightInfantry: 2,
    GrenadierInfantry: 1,
    LightCavalry: 3,
    FootArtillery: 3,
    MoveFirst: 1,
    Commander: 4
  }, 5, 0.80);
  addCombination({ //BH08 Olper
    Prussian: 1,
    LineInfantry: 4,
    LightInfantry: 1,
    MilitiaInfantry: 1,
    LightCavalry: 2,
    LightLancerCavalry: 1,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 2,
    CommandCards: 4,
    TacticianCards: 2,
    VictoryPointsToWin: 5
  }, {
    French: 1,
    LineInfantry: 9,
    LightInfantry: 1,
    LightCavalry: 1,
    HeavyCuirassierCavalry: 1,
    FootArtillery: 1,
    Commander: 1,
    CommandCards: 5,
    TacticianCards: 2,
    MoveFirst: 1,
    VictoryPointsToWin: 5
  }, 5, 0.20);
  addCombination({ //210 Borodino
    VictoryPointsOnSide: 1,
    FieldWorks: 1,
    Russian: 1,
    LineInfantry: 4,
    LightInfantry: 5,
    GrenadierInfantry: 2,
    HeavyCavalry: 2,
    HeavyCuirassierCavalry: 1,
    CossackCavalry: 1,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 2,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 10
  }, {
    French: 1,
    MoveFirst: 1,
    LineInfantry: 9,
    LightInfantry: 5,
    LightCavalry: 3,
    HeavyCavalry: 1,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 6,
    TacticianCards: 4,
    VictoryPointsToWin: 10
  }, 45, 0.36);
  addCombination({ //211 Borodino
    VictoryPointsOnSide: 1,
    Russian: 1,
    LineInfantry: 6,
    LightInfantry: 3,
    GrenadierInfantry: 2,
    GuardLightInfantry: 2,
    LightCavalry: 2,
    HeavyCavalry: 1,
    CossackCavalry: 2,
    FootArtillery: 2,
    Commander: 2,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 7
  }, {
    MoveFirst: 1,
    French: 1,
    LineInfantry: 6,
    LightInfantry: 3,
    YoungGuard: 1,
    LightCavalry: 1,
    HeavyCavalry: 2,
    FootArtillery: 2,
    Commander: 2,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 7
  }, 84, 0.52);
  addCombination({ //212 Borodino
    Russian: 1,
    VictoryPointsOnSide: 1,
    LineInfantry: 5,
    LightInfantry: 4,
    GrenadierInfantry: 2,
    MilitiaInfantry: 2,
    CossackCavalry: 2,
    FootArtillery: 1,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 2,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    MoveFirst: 1,
    LineInfantry: 7,
    LightInfantry: 2,
    LightCavalry: 2,
    FootArtillery: 2,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 7
  }, 60, 0.42);
  addCombination({ //213 Borodino
    VictoryPointsOnSide: 1,
    FieldWorks: 5,
    Russian: 1,
    LineInfantry: 5,
    LightInfantry: 4,
    GrenadierInfantry: 1,
    GuardGrenadierInfantry: 1,
    LightCavalry: 3,
    HeavyCuirassierCavalry: 1,
    GuardHeavyCavalry: 1,
    FootArtillery: 4,
    GuardFootArtillery: 1,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 10
  }, {
    French: 1,
    MoveFirst: 1,
    LineInfantry: 9,
    LightInfantry: 5,
    OldGuardInfantry: 2,
    LightCavalry: 3,
    HeavyCuirassierCavalry: 1,
    HeavyCavalry: 1,
    FootArtillery: 3,
    GuardFootArtillery: 1,
    Commander: 4,
    CommandCards: 6,
    TacticianCards: 6,
    VictoryPointsToWin: 10
  }, 72, 0.56);
  addCombination({ //214 Polotsk
    Russian: 1,
    MoveFirst: 1,
    FieldWorks: 3,
    LineInfantry: 5,
    LightInfantry: 4,
    GrenadierInfantry: 2,
    GuardGrenadierInfantry: 2,
    MilitiaInfantry: 2,
    LightCavalry: 2,
    HeavyCavalry: 1,
    HeavyCuirassierCavalry: 1,
    CossackCavalry: 3,
    FootArtillery: 3,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 8
  }, {
    French: 1,
    LineInfantry: 8,
    LightInfantry: 4,
    LightCavalry: 3,
    HeavyCuirassierCavalry: 1,
    HeavyCavalry: 1,
    FootArtillery: 3,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 4,
    VictoryPointsToWin: 8
  }, 41, 0.46);
  addCombination({ //215 Maloyaroslavets
    Russian: 1,
    MoveFirst: 1,
    LineInfantry: 5,
    LightInfantry: 3,
    GrenadierInfantry: 3,
    LightCavalry: 3,
    HeavyCuirassierCavalry: 2,
    CossackCavalry: 1,
    FootArtillery: 2,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 10
  }, {
    French: 1,
    VictoryPointsOnSide: 2,
    LineInfantry: 6,
    LightInfantry: 3,
    OldGuardInfantry: 1,
    LightCavalry: 1,
    HeavyCavalry: 2,
    FootArtillery: 3,
    Commander: 5,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 10
  }, 83, 0.48);
  addCombination({ //217 Crossing the Berezina
    Russian: 1,
    MoveFirst: 1,
    LineInfantry: 5,
    LightInfantry: 4,
    GrenadierInfantry: 2,
    MilitiaInfantry: 1,
    LightCavalry: 1,
    HeavyCavalry: 2,
    CossackCavalry: 1,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    LineInfantry: 7,
    LightInfantry: 2,
    OldGuardInfantry: 1,
    LightCavalry: 1,
    HeavyCuirassierCavalry: 1,
    FootArtillery: 2,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 7
  }, 37, 0.51);
  addCombination({ //413 Blankenfelde
    Prussian: 1,
    VictoryPointsOnSide: 1,
    LineInfantry: 1,
    ReserveInfantry: 3,
    MilitiaInfantry: 3,
    MilitiaLancerCavalry: 3,
    FootArtillery: 2,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 5
  }, {
    French: 1,
    LineInfantry: 4,
    LightInfantry: 2,
    GrenadierInfantry: 1,
    FootArtillery: 1,
    Commander: 2,
    CommandCards: 4,
    TacticianCards: 4,
    VictoryPointsToWin: 5,
    MoveFirst: 1
  }, 18, 0.72);
  addCombination({ //414 Grossbeeren
    Prussian: 1,
    LineInfantry: 4,
    LightInfantry: 3,
    GrenadierInfantry: 1,
    ReserveInfantry: 4,
    MilitiaInfantry: 5,
    LightCavalry: 2,
    LightLancerCavalry: 1,
    MilitiaInfantry: 2,
    FootArtillery: 4,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 10
  }, {
    French: 1,
    VictoryPointsOnSide: 2,
    LineInfantry: 8,
    LightInfantry: 2,
    GrenadierInfantry: 1,
    LightCavalry: 1,
    LightLancerCavalry: 1,
    FootArtillery: 4,
    HorseArtillery: 1,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 3,
    MoveFirst: 1,
    VictoryPointsToWin: 10
  }, 52, 0.52);
  addCombination({ //415 Dennewitz
    Prussian: 1,
    MoveFirst: 1,
    LineInfantry: 5,
    LightInfantry: 1,
    GrenadierInfantry: 1,
    ReserveInfantry: 1,
    MilitiaInfantry: 3,
    LightCavalry: 1,
    HeavyCavalry: 1,
    HeavyCuirassierCavalry: 1,
    LightLancerCavalry: 1,
    MilitiaLancerCavalry: 2,
    FootArtillery: 3,
    HorseArtillery: 1,
    Commander: 5,
    CommandCards: 4,
    TacticianCards: 4,
    VictoryPointsToWin: 7
  }, {
    French: 1,
    LineInfantry: 8,
    LightInfantry: 1,
    LightCavalry: 2,
    HeavyCavalry: 1,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 4,
    VictoryPointsToWin: 7
  }, 57, 0.42);
  addCombination({ //416 Laon
    Prussian: 1,
    MoveFirst: 1,
    LineInfantry: 5,
    LightInfantry: 1,
    GrenadierInfantry: 2,
    ReserveInfantry: 2,
    MilitiaInfantry: 2,
    LightCavalry: 1,
    HeavyCavalry: 1,
    HeavyCuirassierCavalry: 1,
    LightLancerCavalry: 1,
    MilitiaLancerCavalry: 2,
    FootArtillery: 2,
    HorseArtillery: 1,
    Commander: 5,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 8
  }, {
    French: 1,
    LineInfantry: 5,
    LightInfantry: 2,
    YoungGuard: 1,
    HeavyCuirassierCavalry: 1,
    GuardLightCavalry: 1,
    FootArtillery: 2,
    GuardFootArtillery: 1,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 4,
    VictoryPointsOnSide: 2,
    VictoryPointsToWin: 8
  }, 35, 0.57);
  addCombination({ //417 Laon
    Prussian: 1,
    VictoryPointsOnSide: 2,
    LineInfantry: 6,
    LightInfantry: 1,
    ReserveInfantry: 2,
    MilitiaInfantry: 2,
    HeavyCavalry: 1,
    HeavyCuirassierCavalry: 1,
    MilitiaLancerCavalry: 1,
    FootArtillery: 3,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 9
  }, {
    French: 1,
    MoveFirst: 1,
    LineInfantry: 4,
    LightInfantry: 2,
    YoungGuard: 1,
    OldGuardInfantry: 3,
    LightCavalry: 1,
    HeavyCavalry: 1,
    LightLancerCavalry: 1,
    FootArtillery: 1,
    HorseArtillery: 2,
    Commander: 4,
    CommandCards: 6,
    TacticianCards: 6,
    VictoryPointsToWin: 9
  }, 19, 0.37);
  addCombination({ //505 Wartenburg
    Prussian: 1,
    MoveFirst: 1,
    LineInfantry: 3,
    LightInfantry: 3,
    ReserveInfantry: 2,
    GrenadierInfantry: 1,
    MilitiaInfantry: 4,
    LightCavalry: 2,
    MilitiaLancerCavalry: 1,
    FootArtillery: 4,
    Commander: 3,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 9
  }, {
    French: 1,
    LineInfantry: 5,
    LightInfantry: 4,
    GrenadierInfantry: 1,
    LightCavalry: 3,
    FootArtillery: 1,
    Commander: 4,
    CommandCards: 4,
    TacticianCards: 4,
    VictoryPointsToWin: 9
  }, 40, 0.60);
  addCombination({ //511 Mockern
    Prussian: 1,
    MoveFirst: 1,
    LineInfantry: 2,
    LightInfantry: 2,
    ReserveInfantry: 2,
    MilitiaInfantry: 4,
    GrenadierInfantry: 2,
    LightCavalry: 2,
    HeavyCavalry: 1,
    MilitiaLancerCavalry: 3,
    FootArtillery: 3,
    HorseArtillery: 1,
    Commander: 5,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 10
  }, {
    French: 1,
    VictoryPointsOnSide: 2,
    LineInfantry: 7,
    LightInfantry: 2,
    LightCavalry: 2,
    FootArtillery: 3,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 10
  }, 35, 0.40);
  addCombination({ //512 Gohlis
    Russian: 1,
    MoveFirst: 1,
    LineInfantry: 7,
    LightInfantry: 6,
    LightCavalry: 3,
    HeavyCavalry: 1,
    MilitiaLancerCavalry: 2,
    FootArtillery: 3,
    HorseArtillery: 1,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 10
  }, {
    French: 1,
    LineInfantry: 5,
    LightInfantry: 3,
    GrenadierInfantry: 1,
    LightCavalry: 1,
    HeavyCavalry: 1,
    LightLancerCavalry: 1,
    FootArtillery: 3,
    HorseArtillery: 1,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 10
  }, 24, 0.54);
  addCombination({ //418 Ligny
    Prussian: 1,
    VictoryPointsOnSide: 2,
    LineInfantry: 7,
    LightInfantry: 1,
    GrenadierInfantry: 1,
    ReserveInfantry: 2,
    MilitiaInfantry: 4,
    LightCavalry: 1,
    HeavyCavalry: 1,
    LightLancerCavalry: 1,
    MilitiaLancerCavalry: 1,
    FootArtillery: 2,
    Commander: 5,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 11
  }, {
    French: 1,
    MoveFirst: 1,
    LineInfantry: 7,
    LightInfantry: 3,
    YoungGuard: 2,
    OldGuardInfantry: 2,
    LightCavalry: 2,
    HeavyCavalry: 1,
    FootArtillery: 4,
    GuardFootArtillery: 1,
    Commander: 5,
    CommandCards: 6,
    TacticianCards: 6,
    VictoryPointsToWin: 11
  }, 39, 0.33);
  addCombination({ //419 Plancenoit
    Prussian: 1,
    MoveFirst: 1,
    LineInfantry: 7,
    LightInfantry: 3,
    ReserveInfantry: 5,
    MilitiaInfantry: 2,
    LightCavalry: 3,
    FootArtillery: 2,
    Commander: 5,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsToWin: 9
  }, {
    French:1,
    VictoryPointsOnSide: 2,
    LineInfantry: 5,
    LightInfantry: 1,
    YoungGuard: 3,
    OldGuardInfantry: 2,
    LightCavalry: 1,
    LightLancerCavalry: 1,
    FootArtillery: 2,
    GuardFootArtillery: 1,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 5,
    VictoryPointsOnSide: 9
  }, 49, 0.37);
  addCombination({ //420 Wavre
    Prussian: 1,
    LineInfantry: 4,
    GrenadierInfantry: 1,
    ReserveInfantry: 3,
    MilitiaInfantry: 3,
    LightCavalry: 1,
    LightLancerCavalry: 1,
    FootArtillery: 1,
    HorseArtillery: 1,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 8
  }, {
    French: 1,
    MoveFirst: 1,
    LineInfantry: 11,
    LightInfantry: 3,
    LightCavalry: 2,
    HeavyCavalry: 1,
    FootArtillery: 2,
    Commander: 4,
    CommandCards: 5,
    TacticianCards: 3,
    VictoryPointsToWin: 8
  }, 23, 0.35);
  addCombination({ //MB01 Issy
    Prussian: 1,
    MoveFirst: 1,
    LightInfantry: 2,
    LineInfantry: 6,
    FootArtillery: 3,
    MilitiaInfantry: 3,
    LightCavalry: 1,
    LightLancerCavalry: 1,
    Commander: 3,
    CommandCards: 4,
    TacticianCards: 3,
    VictoryPointsToWin: 7
  }, {
    VictoryPointsOnSide: 2,
    LightInfantry: 1,
    LineInfantry: 7,
    FootArtillery: 2,
    Commander: 2,
    CommandCards: 5,
    TacticianCards: 4,
    VictoryPointsToWin: 7
  }, 1, 0.0);
}
updateDatabase();