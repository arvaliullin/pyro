<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>SVG Transform</title>
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="графика">
        <svg viewBox="0 0 {@ширина} {@высота}">
            <xsl:apply-templates/>
        </svg>
    </xsl:template>
    <xsl:template match="эллипс">
        <ellipse>
            <xsl:attribute name="id">
                <xsl:value-of select="@id" />
            </xsl:attribute>
            <xsl:attribute name="cx">
                <xsl:value-of select="@cx" />
            </xsl:attribute>
            <xsl:attribute name="cy">
                <xsl:value-of select="@cy" />
            </xsl:attribute>
            <xsl:attribute name="ry">
                <xsl:value-of select="@ry" />
            </xsl:attribute>
            <xsl:attribute name="rx">
                <xsl:value-of select="@rx" />
            </xsl:attribute>
            <xsl:attribute name="stroke">
                <xsl:value-of select="@ободок" />
            </xsl:attribute>
            <xsl:attribute name="stroke-width">
                <xsl:value-of select="@ширина-ободка" />
            </xsl:attribute>
            <xsl:attribute name="style">fill: <xsl:value-of select="@заливка" /></xsl:attribute>
        </ellipse>
    </xsl:template>

</xsl:stylesheet>
