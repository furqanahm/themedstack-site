// Tweaks: theme variants, accent colors, motif toggles
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "green-blue",
  "headlineStyle": "serif-mixed",
  "showEcg": true,
  "showGrid": true,
  "ctaStyle": "paper",
  "density": "comfortable"
}/*EDITMODE-END*/;

const TweakControls = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent
  React.useEffect(() => {
    const root = document.documentElement;
    const map = {
      "green-blue":  { g:"#3DBE7B", b:"#3D7BFF" },
      "mint-cobalt": { g:"#5FD3A2", b:"#1F5BD6" },
      "lime-violet": { g:"#A8DC4E", b:"#7C5BFF" },
      "all-green":   { g:"#3DBE7B", b:"#1F8F58" },
    };
    const v = map[tweaks.accent] || map["green-blue"];
    root.style.setProperty("--green", v.g);
    root.style.setProperty("--blue", v.b);
  }, [tweaks.accent]);

  React.useEffect(() => {
    document.body.dataset.density = tweaks.density;
    document.body.dataset.ecg = tweaks.showEcg ? "on" : "off";
    document.body.dataset.grid = tweaks.showGrid ? "on" : "off";
  }, [tweaks.density, tweaks.showEcg, tweaks.showGrid]);

  return (
    <TweaksPanel>
      <TweakSection title="Accent palette">
        <TweakRadio
          value={tweaks.accent}
          onChange={(v) => setTweak("accent", v)}
          options={[
            { value: "green-blue", label: "Clinical" },
            { value: "mint-cobalt", label: "Mint" },
            { value: "lime-violet", label: "Lab" },
            { value: "all-green", label: "Mono-green" },
          ]}
        />
      </TweakSection>
      <TweakSection title="Motifs">
        <TweakToggle label="ECG line" value={tweaks.showEcg} onChange={(v)=>setTweak("showEcg", v)} />
        <TweakToggle label="Grid background" value={tweaks.showGrid} onChange={(v)=>setTweak("showGrid", v)} />
      </TweakSection>
      <TweakSection title="Density">
        <TweakRadio
          value={tweaks.density}
          onChange={(v) => setTweak("density", v)}
          options={[
            { value: "compact", label: "Compact" },
            { value: "comfortable", label: "Comfy" },
            { value: "spacious", label: "Spacious" },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
};

Object.assign(window, { TweakControls });
