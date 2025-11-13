import './styleDivider.css';

export default function Divider({text})
{
    return (
        <div class="divider-text">
        <span>{text}</span>
        </div>
    )
}